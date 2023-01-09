import { Logo } from '@components/icons';
import { Link } from '@components/ui';
import clsx from 'clsx';
import useScrollDirection from 'hooks/useScrollDirection';
import { useEffect, useState } from 'react';

interface NavLink {
  name: string;
  href: string;
}

const NAV_LINKS = [
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Technologies',
    href: '#technologies',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

export default function Header() {
  const scrollDirection = useScrollDirection();
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 30);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        'fixed flex w-full items-center bg-[#0b1b33d0] px-6 backdrop-blur transition-all duration-500 md:px-8 lg:px-14',
        !scrolledToTop && scrollDirection === 'up' ? 'h-20 shadow-xl' : 'h-24',
        !scrolledToTop &&
          scrollDirection === 'down' &&
          '-translate-y-full shadow-xl'
      )}
    >
      <nav className="flex w-full items-center justify-between">
        <Link className="group" href="/" aria-label="Home" title="Home">
          <Logo className="stroke-teal-300 group-hover:fill-teal-300/10 group-focus:fill-teal-300/10" />
        </Link>

        <div className="hidden items-center font-mono text-sm md:flex">
          <ol className="flex gap-2 [counter-reset:section]">
            {NAV_LINKS.map((link: NavLink) => (
              <li key={link.name}>
                <Link
                  className="block p-2 text-slate-300 transition-colors [counter-increment:section] before:mr-1 before:text-xs before:text-teal-300 before:content-['0'counter(section)'.'] hover:text-teal-300 focus:text-teal-300"
                  href={link.href}
                  scroll={false}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ol>

          <Link
            className="ml-5 rounded-sm border border-teal-300 py-3 px-4 text-teal-300 transition-colors hover:bg-teal-300/10 focus:bg-teal-300/10"
            href="/resume.pdf"
            target="_blank"
          >
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}
