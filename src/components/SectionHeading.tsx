import clsx from 'clsx';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'h2'> {
  variant?: 'default' | 'alternative';
}

export default function SectionHeading({
  variant = 'default',
  children,
  className,
  ...rest
}: Props) {
  return (
    <h2
      className={clsx(
        '[counter-increment:heading] before:content-["0"counter(heading)"."]',
        variant === 'default' &&
          'my-10 flex text-2xl font-semibold text-skin-secondary before:mr-3 before:font-mono before:text-lg before:font-normal before:text-teal-300 xs:text-3xl before:xs:text-xl',
        variant === 'alternative' &&
          'mt-10 mb-5 font-mono leading-tight text-teal-300 before:mr-2 before:text-sm',
        className
      )}
      {...rest}
    >
      {children}
      {variant === 'default' && (
        <span className="ml-5 mt-3 h-px flex-1 bg-slate-700 md:max-w-xs" />
      )}
    </h2>
  );
}
