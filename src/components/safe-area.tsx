import { twMerge } from "tailwind-merge";

type SafeAreaProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function SafeArea({ children, className, ...props }: SafeAreaProps) {
  return (
    <div
      className={twMerge(
        "max-w-[1300px] w-full mx-auto px-4 md:px-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
