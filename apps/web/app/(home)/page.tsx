import { NewsList } from "@/components";
import { sources } from "@/components/filter/const";
import { filterParams } from "@/utils";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  const params = await searchParams;

  const filteredParams = filterParams(params, [
    ["domains", sources[0] as string],
  ]);

  const res = await fetch(
    `https://newsapi.org/v2/everything?${new URLSearchParams({
      ...filteredParams,
      apiKey: process.env.NEWS_API_API_KEY as string,
    })}`,
    { cache: "force-cache" }
  );

  const data = await res.json();

  return (
    <Suspense>
      <NewsList news={data.articles} />
    </Suspense>
  );
}
