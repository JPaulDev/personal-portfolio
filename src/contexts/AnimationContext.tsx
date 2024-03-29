import { AnimationControls, useAnimationControls } from 'framer-motion';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  headerControls: AnimationControls;
  heroControls: AnimationControls;
  socialAndEmailControls: AnimationControls;
  transition: {
    duration: number;
    ease: number[];
  };
}

const AnimationContext = createContext<State | null>(null);

// The delay between each section starting it's animation sequence.
const DELAY = 150;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function AnimationProvider(props: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const headerControls = useAnimationControls();
  const heroControls = useAnimationControls();
  const socialAndEmailControls = useAnimationControls();

  useEffect(() => {
    if (isLoading) return;

    const sequence = async (): Promise<void> => {
      await headerControls.start('finish');
      await sleep(DELAY);
      await heroControls.start('finish');
      await sleep(DELAY);
      socialAndEmailControls.start('finish');
    };

    sequence();
  }, [isLoading, headerControls, heroControls, socialAndEmailControls]);

  const value = useMemo(
    () => ({
      isLoading,
      setIsLoading,
      headerControls,
      heroControls,
      socialAndEmailControls,
      transition: {
        duration: 0.3,
        ease: [0.645, 0.045, 0.355, 1],
      },
    }),
    [isLoading, headerControls, heroControls, socialAndEmailControls]
  );

  return <AnimationContext.Provider value={value} {...props} />;
}

export function useAnimation() {
  const context = useContext(AnimationContext);

  if (!context) {
    throw new Error('useUI must be wrapped in a <UIProvider />');
  }

  return context;
}
