import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // Look for a tag query parameter
  const tags = request.nextUrl.searchParams.get("tags");

  // If we don't have a tag, throw an error
  if (!tags) {
    return new Response("Unprocessable Entity", { status: 422 });
  }

  // Send the request for revalidation
  tags.split(",").forEach((tag) => {
    revalidateTag(tag);
  });

  // Return the response
  return Response.json({ now: Date.now(), revalidated: true });
}
