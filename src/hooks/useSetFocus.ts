import { RefObject, useEffect } from 'react';

export default function useSetFocus(ref: RefObject<HTMLElement>): void {
  useEffect(() => {
    if (!ref.current) return;

    ref.current.focus();
  });
}
