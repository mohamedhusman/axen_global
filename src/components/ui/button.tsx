import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 active:scale-[0.98] cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-[#4c9eff] to-[#7b6cff] text-white shadow-[0_8px_30px_-8px_rgba(76,158,255,0.55)] hover:shadow-[0_12px_40px_-8px_rgba(123,108,255,0.6)] hover:brightness-110",
        secondary:
          "glass text-foreground hover:border-[rgba(124,156,255,0.4)] hover:bg-white/[0.07]",
        ghost: "text-muted hover:text-foreground hover:bg-white/5",
        outline:
          "border border-line text-foreground hover:border-[rgba(124,156,255,0.4)] hover:bg-white/[0.04]",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { Button, buttonVariants };
