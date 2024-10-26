import { NextRequest } from "next/server";
import { incrementBlogViewsBySlug } from "@/lib/db";
import { kv } from "@vercel/kv";
import { createHash } from "crypto";
import { Ratelimit } from "@upstash/ratelimit";
import { differenceInSeconds } from "date-fns";
import { getDeltaSeconds } from "@/lib/dates";

/**
 * Rate limiter that allows 5 requests per 10 seconds
 * @link https://github.com/upstash/ratelimit
 * @link https://github.com/vercel/examples/tree/main/edge-functions/api-rate-limit
 */
const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(1, "10s"),
});

/**
 * @link https://nextjs.org/docs/app/building-your-application/routing/route-handlers
 * @link https://www.ietf.org/archive/id/draft-polli-ratelimit-headers-02.html
 */
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
  const { success, limit, remaining, reset } = await ratelimit.limit(
    identifier
  );

  // RateLimit header fields
  const headers: Record<string, string> = {
    "RateLimit-Limit": limit.toString(),
    "RateLimit-Remaining": remaining.toString(),
    "RateLimit-Reset": getDeltaSeconds(reset).toString(),
  };

  if (!success) {
    return new Response("Too many requests", { status: 429, headers });
  }

  await incrementBlogViewsBySlug(slug);
  return new Response(null, { status: 204, headers });
}
