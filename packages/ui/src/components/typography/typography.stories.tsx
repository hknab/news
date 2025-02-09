import type { Meta, StoryObj } from "@storybook/react";
import { HTMLElementType } from "react";
import { Typography, TypographyProps } from "./typography";

const meta: Meta<typeof Typography> = {
  title: "ui/typography",
  component: Typography,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "p",
        "blockquote",
        "ul",
        "inlineCode",
        "lead",
        "large",
        "small",
        "muted",
      ] as TypographyProps<HTMLElementType>["variant"][],
    },
    as: { control: "text" },
    children: { control: "text", defaultValue: "Typography Example" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: { variant: "h1", children: "Heading 1" },
};

export const Heading2: Story = {
  args: { variant: "h2", children: "Heading 2" },
};

export const Paragraph: Story = {
  args: {
    variant: "p",
    children: "This is a paragraph of text used for demonstration.",
  },
};

export const Blockquote: Story = {
  args: {
    variant: "blockquote",
    children: 'This is a blockquote. "To be or not to be."',
  },
};

export const InlineCode: Story = {
  args: { variant: "inlineCode", children: "const x = 10;" },
};

export const Lead: Story = {
  args: {
    variant: "lead",
    children: "This is a lead text, typically used for introductions.",
  },
};

export const Large: Story = {
  args: { variant: "large", children: "This is large text." },
};

export const Small: Story = {
  args: { variant: "small", children: "This is small text." },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    children: "This is muted text, often used for descriptions or notes.",
  },
};
