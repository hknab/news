import { NewsCardSkeleton } from "@/components";

export default function Loading() {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]?.map(
        (number) => <NewsCardSkeleton key={number} />
      )}
    </div>
  );
}
