import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Skeleton,
} from "@repo/ui";

const NewsCardSkeleton = () => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg sm:text-xl md:text-2xl">
          <Skeleton className="h-6 w-3/4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-2 flex-grow flex flex-col justify-between">
        <Skeleton className="w-full h-48 mb-4 rounded-lg" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-2" />
        <div className="flex items-center text-xs text-muted-foreground space-x-4 mt-auto">
          <div className="flex items-center">
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2 mt-auto">
        <Button variant="ghost" size="sm" disabled>
          <Skeleton className="h-4 w-12" />
        </Button>
        <Button variant="outline" size="sm" disabled>
          <Skeleton className="h-4 w-16" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewsCardSkeleton;
