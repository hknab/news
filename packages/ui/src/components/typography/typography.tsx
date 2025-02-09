import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@repo/ui/lib";

const typographyVariants = cva("ui-text-foreground", {
  variants: {
    variant: {
      h1: "ui-scroll-m-20 ui-text-4xl ui-font-extrabold ui-tracking-tight lg:ui-text-5xl",
      h2: "ui-scroll-m-20 ui-border-b ui-pb-2 ui-text-3xl ui-font-semibold ui-tracking-tight ui-transition-colors first:ui-mt-0",
      h3: "ui-scroll-m-20 ui-text-2xl ui-font-semibold ui-tracking-tight",
      h4: "ui-scroll-m-20 ui-text-xl ui-font-semibold ui-tracking-tight",
      p: "ui-leading-7 [&:not(:first-child)]:ui-mt-6",
      blockquote: "ui-mt-6 ui-border-l-2 ui-pl-6 ui-italic",
      ul: "ui-my-6 ui-ml-6 ui-list-disc [&>li]:ui-mt-2",
      inlineCode:
        "ui-relative ui-rounded ui-bg-muted ui-px-[0.3rem] ui-py-[0.2rem] ui-font-mono ui-text-sm ui-font-semibold",
      lead: "ui-text-xl ui-text-muted-foreground",
      large: "ui-text-lg ui-font-semibold",
      small: "ui-text-sm ui-font-medium ui-leading-none",
      muted: "ui-text-sm ui-text-muted-foreground",
    },
  },
  defaultVariants: { variant: "p" },
});

export interface TypographyProps<C extends React.ElementType>
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: C;
}

const Typography = React.forwardRef(
  <C extends React.ElementType = "p">(
    { className, variant, as, ...props }: TypographyProps<C>,
    ref: React.ComponentPropsWithRef<C>["ref"]
  ) => {
    const Component = as || "p";
    return (
      <Component
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
