"use client";
import { Filter } from "@/components";
import { Typography } from "@repo/ui";
import { FC, PropsWithChildren, Suspense } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Typography variant="h1" className="mx-auto my-auto text-center">
        Turbo News
      </Typography>
      <Suspense>
        <Filter />
        {children}
      </Suspense>
    </div>
  );
};

export default Layout;
