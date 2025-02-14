"use client";

import { NewsCard } from "@/components";
import { Post } from "@/types";
import { Button } from "@repo/ui";

interface NewsListProps {
  isLoading?: false;
  news?: Post[];
}

export default function NewsList({ news }: NewsListProps) {
  return (
    <div className="space-y-4">
      {news?.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No news articles found.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
            {news?.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>

          <div className="flex justify-center space-x-2 mt-4">
            <Button
              variant="outline"
              onClick={() => {
                // handle page change
              }}
              disabled
            >
              Previous
            </Button>
            <span className="py-2 px-3 bg-muted rounded-md">Page1 of 100</span>
            <Button
              variant="outline"
              onClick={() => {
                // handle page change
              }}
              disabled
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
