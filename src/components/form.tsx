import { twMerge } from "tailwind-merge";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type TextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export function Input({ type, className, ...props }: InputProps) {
  return (
    <input
      type={type || "text"}
      className={twMerge(
        "px-3 py-2 outline-none bg-neutral-900 rounded-md",
        className
      )}
      {...props}
    />
  );
}

export function TextArea({ className, ...props }: TextAreaProps) {
  return (
    <textarea
      className={twMerge(
        "px-3 py-2 outline-none bg-neutral-900 rounded-md min-h-[100px] resize-none",
        className
      )}
      {...props}
    />
  );
}
