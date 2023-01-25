import { useInView, useReducedMotion } from 'framer-motion';
import { ElementType, ReactNode, useRef } from 'react';

interface Props {
  id?: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  threshold?: number;
  duration?: number;
  children: ReactNode;
}

/**
 * ScrollReveal component - fades in and slides up when in view, used to apply
 * animations to components when they are scrolled into view. The as prop can be
 * used to change the element type of the component, for example to use a
 * heading element instead of a div. The threshold prop can be used to adjust
 * the amount of the component that needs to be in view before the animation
 * occurs.
 *
 * @example
 * <ScrollReveal as="h1" delay={200} threshold={0.5} duration={500}>
 *   Heading Text Here
 * </ScrollReveal>
 */
export default function ScrollReveal({
  id,
  className,
  as,
  threshold = 0,
  duration = 500,
  delay = 200,
  children,
}: Props) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null as null | HTMLElement);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
  });

  const Component = as || 'div';

  return (
    <Component
      ref={ref}
      id={id}
      className={className}
      style={{
        transform:
          isInView && !shouldReduceMotion ? 'none' : 'translateY(30px)',
        opacity: isInView ? 1 : 0,
        transition: `all ${duration}ms cubic-bezier(0.645, 0.045, 0.355, 1) ${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}
