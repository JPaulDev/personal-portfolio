import clsx from 'clsx';
import { ComponentProps } from 'react';

export default function SectionHeading({
  children,
  className,
  ...rest
}: ComponentProps<'h2'>) {
  return (
    <h2
      className={clsx(
        'my-10 flex text-2xl font-semibold text-skin-secondary [counter-increment:heading] before:mr-3 before:font-mono before:text-lg before:font-normal before:text-teal-300 before:content-["0"counter(heading)"."] xs:text-3xl before:xs:text-xl',
        className
      )}
      {...rest}
    >
      {children}
      <span className="ml-5 mt-3 h-px flex-1 bg-slate-700 md:max-w-xs" />
    </h2>
  );
}
