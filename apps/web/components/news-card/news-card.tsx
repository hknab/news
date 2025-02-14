"use client";

import { Post } from "@/types";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Typography,
} from "@repo/ui";
import { BookmarkIcon, CalendarIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
interface NewsCardProps {
  article: Post;
}

export default function NewsCard({ article }: NewsCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl md:text-2xl">{article.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2 flex-grow flex flex-col justify-start">
        {article.urlToImage && (
          <div className="relative w-full h-48 mb-4">
            <Image
              src={article.urlToImage || "/placeholder.svg"}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
        <p className="text-sm sm:text-base text-muted-foreground mb-2">
          {article.description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2 mat-auto">
        <div className="flex items-center">
          <CalendarIcon className="h-3 w-3 mr-1 text-card-foreground" />
          <Typography variant="muted">
            {new Date(article.publishedAt).toLocaleDateString()}
          </Typography>
        </div>
        <Button variant="ghost" size="sm">
          <BookmarkIcon className="h-4 w-4 mr-2" />
          {isSaved ? "Saved" : "Save"}
        </Button>
        <Link href={article.url} target="_blank">
          <Button variant="link" size="sm" asChild>
            <ExternalLinkIcon className="h-4 w-4 mr-2" />
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
