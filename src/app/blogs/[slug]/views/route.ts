import { NextRequest, NextResponse } from "next/server";

// https://vercel.com/guides/rate-limiting-edge-middleware-vercel-kv

// https://vercel.com/docs/storage/vercel-kv

// https://github.com/vercel/storage/tree/main/packages/kv

// https://github.com/delbaoliveira/website/blob/main/pages/api/likes/%5Bslug%5D.ts

// https://upstash.com/blog/nextjs13-approuter-view-counter

// https://github.com/vercel/storage/tree/main/packages/kv
import { db } from "@/lib/db";
import { blogViews } from "@/lib/db/schema";
import { sql } from "drizzle-orm";
import { kv } from "@vercel/kv";
import { createHash } from "crypto";
import { Ratelimit } from "@upstash/ratelimit";

// export async function POST(
//   request: NextRequest,
//   { params }: { params: { slug: string } }
// ) {
//   const { slug } = params;
//   const ip = request.ip ?? "127.0.0.1";

//   // Hash IP address
//   const hash = createHash("md5").update(ip).digest("hex");

//   // Check if the user has viewed the page already in the last 24 hours
//   const isNew = await kv.set(["blogviews", slug, hash].join(":"), true, {
//     nx: true,
//     ex: 60,
//   });

//   if (isNew) {
//     // Increment views
//     db.insert(blogViews)
//       .values({ slug, views: 1 })
//       .onDuplicateKeyUpdate({ set: { views: sql`${blogViews.views} + 1` } })
//       .execute();
//   }

//   console.log("isNew", isNew);
//   // console.log(hash);
//   // console.log(ip);

//   return new Response(null, { status: 204 });
// }

/**
 * Rate limiter that allows 10 requests per 10 seconds
 * @link https://github.com/upstash/ratelimit
 * @link https://github.com/vercel/examples/tree/main/edge-functions/api-rate-limit
 */
const ratelimit = new Ratelimit({
  redis: kv,
  // Rate limit to
  limiter: Ratelimit.slidingWindow(10, "10s"),
});

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const ip = request.ip ?? "127.0.0.1";

  // Hash the IP address for security
  const hashedIp = createHash("md5").update(ip).digest("hex");

  // Limit the number of requests by blog page, per user
  const identifier = [slug, hashedIp].join(":");
  const { success } = await ratelimit.limit(identifier);

  if (success) {
    // Increment views
    db.insert(blogViews)
      .values({ slug, views: 1 })
      .onDuplicateKeyUpdate({ set: { views: sql`${blogViews.views} + 1` } })
      .execute();
  }

  return new Response(null, { status: 204 });
}
