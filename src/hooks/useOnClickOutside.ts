import { RefObject, useEffect } from 'react';

type Handler = () => void;

export default function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  callback: Handler
): void {
  const handleClickOutside = (e: MouseEvent | TouchEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  });
}
