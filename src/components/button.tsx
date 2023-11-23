import { twMerge } from "tailwind-merge";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Normal({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "bg-primary text-white font-bold rounded-md px-4 py-2 duration-300 hover:opacity-70",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function Outline({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "bg-transparent border border-white/20 text-white font-bold rounded-md px-4 py-2 duration-300 hover:opacity-70",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
