import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, ButtonProps } from "./button";

const getButton = (name: string) => screen.getByRole("button", { name });

describe("Button component", () => {
  it("renders correctly with default props", () => {
    render(<Button>Default Button</Button>);
    const button = getButton("Default Button");
    expect(button).toHaveClass(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    );
    expect(button).toHaveClass(
      "bg-primary text-primary-foreground shadow hover:bg-primary/90"
    );
    expect(button).toHaveClass("h-9 px-4 py-2");
  });

  it("renders all variant classes correctly", () => {
    const variants: Required<Pick<ButtonProps, "variant" | "className">>[] = [
      {
        variant: "default",
        className:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      },
      {
        variant: "destructive",
        className:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      },
      {
        variant: "outline",
        className:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      },
      {
        variant: "secondary",
        className:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      },
      {
        variant: "ghost",
        className: "hover:bg-accent hover:text-accent-foreground",
      },
      {
        variant: "link",
        className: "text-primary underline-offset-4 hover:underline",
      },
    ];

    variants.forEach(({ variant, className }) => {
      render(<Button variant={variant}>{variant} Button</Button>);
      const button = getButton(`${variant} Button`);
      expect(button).toHaveClass(className);
    });
  });

  it("renders all size classes correctly", () => {
    const sizes: Required<Pick<ButtonProps, "size" | "className">>[] = [
      { size: "default", className: "h-9 px-4 py-2" },
      { size: "sm", className: "h-8 rounded-md px-3 text-xs" },
      { size: "lg", className: "h-10 rounded-md px-8" },
      { size: "icon", className: "h-9 w-9" },
    ];

    sizes.forEach(({ size, className }) => {
      render(<Button size={size}>{size} Button</Button>);
      const button = getButton(`${size} Button`);
      expect(button).toHaveClass(className);
    });
  });

  it("handles click events correctly", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const button = getButton("Click Me");
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disables the button when the disabled prop is set", async () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled Button
      </Button>
    );

    const button = getButton("Disabled Button");
    expect(button).toBeDisabled();

    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies additional classes passed via className prop", () => {
    render(<Button className="custom-class">Custom Class Button</Button>);

    const button = getButton("Custom Class Button");
    expect(button).toHaveClass("custom-class");
  });

  it("handles multiple props correctly", () => {
    render(
      <Button variant="secondary" size="lg" className="extra-class">
        Secondary Large
      </Button>
    );
    const button = getButton("Secondary Large");
    expect(button).toHaveClass(
      "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80"
    );
    expect(button).toHaveClass("h-10 rounded-md px-8");
    expect(button).toHaveClass("extra-class");
  });

  it("supports focus-visible styles", async () => {
    render(<Button>Focusable Button</Button>);
    const button = getButton("Focusable Button");
    button.focus();
    expect(button).toHaveClass("focus-visible:ring-1 focus-visible:ring-ring");
  });
});
