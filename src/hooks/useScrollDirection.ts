import { useEffect, useRef, useState } from 'react';

const THRESHOLD = 0;

export default function useScrollDirection(): 'up' | 'down' {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const blocking = useRef<boolean>(false);
  const prevScrollY = useRef<number>(0);

  useEffect(() => {
    prevScrollY.current = window.scrollY;

    const updateScrollDirection = () => {
      const { scrollY } = window;

      if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
        const newScrollDirection =
          scrollY > prevScrollY.current ? 'down' : 'up';

        setScrollDirection(newScrollDirection);

        prevScrollY.current = scrollY > 0 ? scrollY : 0;
      }

      blocking.current = false;
    };

    const handleScroll = () => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateScrollDirection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection]);

  return scrollDirection;
}
