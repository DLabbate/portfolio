import { NextRequest } from "next/server";
import { db, incrementBlogViewsBySlug } from "@/lib/db";
import { blogViews } from "@/lib/db/schema";
import { sql } from "drizzle-orm";
import { kv } from "@vercel/kv";
import { createHash } from "crypto";
import { Ratelimit } from "@upstash/ratelimit";

/**
 * Rate limiter that allows 5 requests per 10 seconds
 * @link https://github.com/upstash/ratelimit
 * @link https://github.com/vercel/examples/tree/main/edge-functions/api-rate-limit
 */
const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(5, "10s"),
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
    incrementBlogViewsBySlug(slug);
  }

  return new Response(null, { status: 204 });
}
