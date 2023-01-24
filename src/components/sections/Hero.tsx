import { useAnimation } from 'contexts/AnimationContext';
import { motion } from 'framer-motion';

const elements = [
  {
    motionElement: motion.h1,
    text: 'Hi, my name is',
    styles: 'mb-4 ml-1 font-mono text-teal-300 xs:mb-6',
  },
  {
    motionElement: motion.h2,
    text: 'Jonathan Watson.',
    styles:
      'text-[clamp(40px,8vw,80px)] font-bold leading-none text-skin-secondary',
  },
  {
    motionElement: motion.h3,
    text: 'I build things for the web.',
    styles:
      'mb-3 mt-1 text-[clamp(40px,8vw,80px)] font-bold leading-none text-skin-primary',
  },
  {
    motionElement: motion.p,
    text: `I'm a web developer who is passionate about creating visually
      stunning, responsive and user-friendly websites and web applications. I am
      always eager to take on new challenges and enjoy staying up to date with
      the latest web development trends and technologies.`,
    styles: 'mb-12 max-w-xl text-lg text-skin-primary sm:text-xl',
  },
];

export default function Hero() {
  const { transition, heroControls } = useAnimation();

  const variants = {
    start: { opacity: 0, y: 30 },
    finish: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        ...transition,
      },
    }),
  };

  return (
    <section className="flex min-h-screen flex-col justify-center">
      {elements.map((element, i) => (
        <element.motionElement
          key={i}
          className={element.styles}
          custom={i}
          initial="start"
          animate={heroControls}
          variants={variants}
        >
          {element.text}
        </element.motionElement>
      ))}
    </section>
  );
}
