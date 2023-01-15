import { ComponentPropsWithoutRef } from 'react';

export default function StyledComponents(
  props: ComponentPropsWithoutRef<'svg'>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 318 318"
      role="img"
      {...props}
    >
      <title>Styled Components</title>
      <text fontSize="280" x="-30" y="270">
        💅
      </text>
    </svg>
  );
}
