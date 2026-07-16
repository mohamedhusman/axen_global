import * as React from "react";
import { cn } from "@/lib/utils";

const fieldClasses =
  "w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-faint transition-colors focus:border-[rgba(124,156,255,0.5)] focus:bg-white/[0.05] focus:outline-none";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(fieldClasses, className)} {...props} />
));
Input.displayName = "Input";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(fieldClasses, "resize-none", className)}
    {...props}
  />
));
Textarea.displayName = "Textarea";

const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(fieldClasses, "appearance-none bg-surface", className)}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";

const Label = ({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label
    className={cn("mb-2 block text-sm font-medium text-foreground/90", className)}
    {...props}
  />
);

export { Input, Textarea, Select, Label };
