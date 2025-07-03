export function AutoScroller(props: { data: string[]; title?: string }) {
  return (
    <div className="border-y border-neutral-900">
      {props.title && (
        <p className="mt-4 text-sm md:text-lg text-neutral-400 font-bold text-center">
          {props.title}
        </p>
      )}
      <div className="l-inline-start-center-nowrap text-xl md:text-4xl pt-8 pb-4 overflow-hidden auto-scroller-container">
        <div className="l-inline-start-center-nowrap auto-scroller">
          {props.data.map((item, index) => (
            <strong key={index} className="px-8">
              {item}
            </strong>
          ))}
        </div>
        <div className="l-inline-start-center-nowrap auto-scroller">
          {props.data.map((item, index) => (
            <strong key={index} className="px-8">
              {item}
            </strong>
          ))}
        </div>
      </div>
    </div>
  );
}
