"use client";

import {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

function FieldShell({
  label,
  hint,
  error,
  children,
}: {
  label?: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      {label && <span className="text-sm font-medium text-ink">{label}</span>}
      {children}
      {hint && !error && <p className="text-xs text-ink-muted">{hint}</p>}
      {error && <p className="text-xs text-danger">{error}</p>}
    </label>
  );
}

const fieldBase =
  "w-full rounded-xl border border-line bg-surface px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-muted/70 transition-colors focus:border-primary focus:outline-none disabled:opacity-60";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, hint, error, className, ...props }, ref) => (
    <FieldShell label={label} hint={hint} error={error}>
      <input
        ref={ref}
        className={cn(fieldBase, error && "border-danger", className)}
        {...props}
      />
    </FieldShell>
  ),
);
TextField.displayName = "TextField";

export interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ label, hint, error, className, rows = 4, ...props }, ref) => (
    <FieldShell label={label} hint={hint} error={error}>
      <textarea
        ref={ref}
        rows={rows}
        className={cn(fieldBase, "resize-none", error && "border-danger", className)}
        {...props}
      />
    </FieldShell>
  ),
);
TextAreaField.displayName = "TextAreaField";

export interface SelectFieldProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  options: { label: string; value: string }[];
  placeholder?: string;
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, hint, error, className, options, placeholder = "Select", ...props }, ref) => (
    <FieldShell label={label} hint={hint} error={error}>
      <select
        ref={ref}
        className={cn(fieldBase, "appearance-none bg-surface", error && "border-danger", className)}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldShell>
  ),
);
SelectField.displayName = "SelectField";
