import { LucideProps, icons } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface LucideIconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof icons;
}

export function LucideIcon({ name, className, ...rest }: LucideIconProps) {
  const Icon = icons[name];

  return <Icon className={twMerge("w-4 h-4", className)} {...rest} />;
}
