import { twMerge } from "tailwind-merge";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Normal({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "bg-white text-black font-medium rounded-md text-base md:text-lg md:px-6 px-5 py-3 duration-300 hover:opacity-70 min-w-[200px] l-inline-center-center gap-3",
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
        "bg-transparent border border-white/20 text-white font-medium rounded-md text-base md:text-lg md:px-6 px-5 py-3 duration-300 hover:opacity-70 min-w-[200px] l-inline-center-center gap-3",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
