import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import { useAnimation } from 'contexts/AnimationContext';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function LoadingScreen() {
  const { isLoading, setIsLoading } = useAnimation();
  const ref = useRef(null);

  const drawControls = useAnimationControls();
  const fadeInControls = useAnimationControls();
  const fadeOutControls = useAnimationControls();
  const backgroundControls = useAnimationControls();

  useEffect(() => {
    if (ref.current) {
      disableBodyScroll(ref.current, { reserveScrollBarGap: true });
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  });

  useEffect(() => {
    const sequence = async (): Promise<void> => {
      await drawControls.start({ pathLength: 1.1 });
      await fadeInControls.start({ opacity: 1, pathLength: 1.1 });
      await fadeOutControls.start({ scale: 0.1, opacity: 0 });
      await backgroundControls.start({ opacity: 0 });
      setIsLoading(false);
    };

    sequence();
  }, [
    setIsLoading,
    drawControls,
    fadeInControls,
    fadeOutControls,
    backgroundControls,
  ]);

  return isLoading ? (
    <motion.div
      ref={ref}
      initial={{ opacity: 1 }}
      animate={backgroundControls}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#020c1b] text-teal-300"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        strokeWidth="1.3"
        stroke="currentColor"
        fill="none"
        role="img"
        initial={{ scale: 1, opacity: 1 }}
        animate={fadeOutControls}
        transition={{ duration: 0.3, delay: 0.5 }}
        strokeLinejoin="round"
        className="h-24 w-24"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={drawControls}
          transition={{ duration: 1 }}
          d="M17 4.873a2 2 0 0 1 1 1.747v6.536a2 2 0 0 1 -1.029 1.748l-6 3.833a2 2 0 0 1 -1.942 0l-6 -3.833a2 2 0 0 1 -1.029 -1.747v-6.537a2 2 0 0 1 1.029 -1.748l6 -3.572a2.056 2.056 0 0 1 2 0l6 3.573h-.029z"
        />
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={fadeInControls}
          transition={{ duration: 0.5 }}
          d="M8 6h4v6a2 2 0 1 1 -4 0"
        />
      </motion.svg>
    </motion.div>
  ) : null;
}
