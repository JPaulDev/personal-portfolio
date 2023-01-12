import { ComponentPropsWithoutRef } from 'react';

export default function Logo(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 20 20"
      strokeWidth="1.3"
      stroke="currentColor"
      fill="none"
      role="img"
      strokeLinejoin="round"
      {...props}
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M17 4.873a2 2 0 0 1 1 1.747v6.536a2 2 0 0 1 -1.029 1.748l-6 3.833a2 2 0 0 1 -1.942 0l-6 -3.833a2 2 0 0 1 -1.029 -1.747v-6.537a2 2 0 0 1 1.029 -1.748l6 -3.572a2.056 2.056 0 0 1 2 0l6 3.573h-.029z" />
      <path fill="none" d="M8 6h4v6a2 2 0 1 1 -4 0" />
    </svg>
  );
}
