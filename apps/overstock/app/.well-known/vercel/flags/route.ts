import { type ApiData } from "@vercel/flags";
import { NextResponse } from "next/server";

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export async function GET() {
  const date = new Date(
    new Date().toLocaleString("en", { timeZone: "America/Los_Angeles" })
  );

  return NextResponse.json<ApiData>({
    definitions: {
      featuredDeals: {
        description: "The date of the featured deals to display.",
        options: [
          // TODO: Remove
          {
            label: ,
            value: "2024-08-09",
          },
          ...Array.from(Array(30).keys()).map((i) => {
            const value = addDays(date, i).toISOString().split("T")[0];

            return {
              label: value,
              value,
            };
          }),
        ],
      },
    },
  });
}
