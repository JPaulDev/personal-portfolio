import { NAV_LINKS, RESUME_LINK } from '@config';
import { useScrollDirection } from '@hooks';
import { Logo } from '@icons';
import clsx from 'clsx';
import { useUI } from 'contexts/UIContext';
import { useEffect, useState } from 'react';
import Link from './Link';

interface NavLink {
  name: string;
  href: string;
}

export default function Header() {
  const scrollDirection = useScrollDirection();
  const [scrolledToTop, setScrolledToTop] = useState<boolean>(true);

  const { handleOpenSidebar } = useUI();

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
        'fixed z-40 flex w-full items-center bg-skin-primary bg-opacity-80 px-6 backdrop-blur transition-all duration-500 md:px-8 lg:px-14',
        !scrolledToTop && scrollDirection === 'up' ? 'h-20 shadow-xl' : 'h-24',
        !scrolledToTop &&
          scrollDirection === 'down' &&
          '-translate-y-full shadow-xl'
      )}
    >
      <nav className="flex w-full items-center justify-between">
        <Link className="group" href="/" aria-label="Home" title="Home">
          <Logo className="h-12 w-12 stroke-teal-300 group-hover:fill-teal-300/10 group-focus:fill-teal-300/10" />
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
            className="ml-5 rounded border border-teal-300 py-3 px-4 text-teal-300 transition-colors hover:bg-teal-300/10 focus:bg-teal-300/10"
            href={RESUME_LINK}
            target="_blank"
          >
            Resume
          </Link>
        </div>

        <button
          title="Open Menu"
          aria-label="Open Menu"
          className="group md:hidden"
          onClick={handleOpenSidebar}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-700 shadow-lg ring-0 ring-slate-500 transition-all duration-200 hover:ring-2">
            <span className="flex h-5 w-5 flex-col justify-between">
              <span className="h-[0.125rem] bg-teal-300" />
              <span className="h-[0.125rem] w-3 bg-teal-300" />
              <span className="h-[0.125rem] bg-teal-300" />
            </span>
          </span>
        </button>
      </nav>
    </header>
  );
}
