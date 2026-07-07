interface FlagProps {
  subtitle: string;
  step: number;
  title: string;
}

export function Flag(props: FlagProps) {
  return (
    <div className="l-stack-center-center gap-4 uppercase">
      <p className="tracking-space font-medium text-sm md:text-base">
        {props.subtitle}
      </p>

      <div>
        <div className="w-1 h-24 mx-auto bg-gradient-to-t from-blue-500 to-transparent" />
        <div className="font-bold l-inline-center-center bg-blue-500 rounded-full w-12 h-12">
          {props.step}
        </div>
      </div>

      <strong className="text-lg md:text-2xl text-blue-500">
        {props.title}
      </strong>
    </div>
  );
}
