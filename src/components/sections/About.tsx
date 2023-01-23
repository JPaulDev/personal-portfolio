import { Link, ScrollReveal, SectionHeading } from '@components';
import { RECENT_SKILLS } from '@config';
import Image from 'next/image';
import profile from '../../../public/images/profile.webp';

export default function About() {
  return (
    <section id="about" className="max-w-4xl">
      <ScrollReveal threshold={0.2}>
        <SectionHeading>About Me</SectionHeading>

        <div className="grid justify-items-center gap-14 md:grid-cols-[3fr_2fr] md:justify-items-start">
          <div className="space-y-4 text-lg text-skin-primary xs:text-xl">
            <p>
              Hi! My name is Jonathan, and I enjoy creating things that live on
              the internet. My interest in web development began after
              completing the Harvard CS50:{' '}
              <Link
                href="https://cs50.harvard.edu/x/"
                className="relative whitespace-nowrap text-teal-300 after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-teal-300 after:transition-all after:duration-300 after:hover:w-full"
              >
                Introduction to Computer Science
              </Link>{' '}
              course. After that, I was hooked on all things programming.
              Eventually, I discovered{' '}
              <Link
                href="https://www.theodinproject.com/"
                className="relative whitespace-nowrap text-teal-300 after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-teal-300 after:transition-all after:duration-300 after:hover:w-full"
              >
                The Odin Project
              </Link>{' '}
              and began my journey into web development.
            </p>
            <p>
              What followed was a year of intense self-learning, where I taught
              myself the fundamentals of web development and design. I initially
              started by building websites and applications with HTML, CSS, and
              JavaScript. Following that, I then learned React, Next.js,
              Tailwind CSS and TypeScript, which took my skills to the next
              level.
            </p>
            <p>
              I&apos;m currently looking for a full-time position as a Front-end
              Developer, where I can continue to grow and improve my skills.
            </p>
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>

            <ul className="grid max-w-sm grid-cols-2 gap-x-3 gap-y-2 font-mono text-sm">
              {RECENT_SKILLS.map((item) => (
                <li
                  key={item}
                  className="before:mr-1 before:text-teal-300 before:content-['▹']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="group h-fit w-[min(70%,300px)] md:w-auto">
            <div className="pointer-events-none relative rounded-md bg-teal-300 after:absolute after:top-5 after:left-5 after:h-full after:w-full after:rounded-md after:border-2 after:border-teal-300 after:transition-all after:duration-300 group-hover:after:top-3 group-hover:after:left-3">
              <Image
                className="relative z-10 rounded-md mix-blend-multiply grayscale transition-all duration-300 group-hover:mix-blend-normal group-hover:grayscale-0"
                alt="Personal profile picture."
                quality={90}
                src={profile}
              />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
