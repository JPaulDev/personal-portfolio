import { NAV_LINKS, RESUME_LINK } from '@config';
import { useCloseOnEscape, useOnClickOutside, useSetFocus } from '@hooks';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import { useUI } from 'contexts/UIContext';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Link from './Link';

interface Props {
  onCloseSidebar: () => void;
}

interface NavLink {
  name: string;
  href: string;
}

const transition = {
  duration: 0.3,
  ease: [0.645, 0.045, 0.355, 1],
};

function SidebarView({ onCloseSidebar }: Props) {
  const sidebarRef = useRef(null as null | HTMLDivElement);
  const closeButtonRef = useRef(null as null | HTMLButtonElement);

  useOnClickOutside(sidebarRef, onCloseSidebar);
  useSetFocus(closeButtonRef);
  useCloseOnEscape(onCloseSidebar);

  useEffect(() => {
    if (sidebarRef.current) {
      disableBodyScroll(sidebarRef.current, { reserveScrollBarGap: true });
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        onCloseSidebar();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onCloseSidebar]);

  return (
    <motion.div
      initial={{ backdropFilter: 'blur(0px)' }}
      animate={{ backdropFilter: 'blur(2px)' }}
      exit={{ backdropFilter: 'blur(0px)' }}
      transition={transition}
      className="fixed inset-0 z-50"
    >
      <motion.div
        ref={sidebarRef}
        role="dialog"
        aria-modal="true"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={transition}
        className="absolute right-0 flex h-full w-8/12 max-w-xs items-center justify-center bg-skin-secondary shadow-2xl"
      >
        <button
          ref={closeButtonRef}
          title="Close Menu"
          aria-label="Close Menu"
          className="group absolute top-6 right-6"
          onClick={onCloseSidebar}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-700 shadow-lg ring-0 ring-slate-500 transition-all duration-200 hover:ring-2">
            <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
              <span className="absolute h-[0.125rem] w-7 rotate-45 bg-teal-300" />
              <span className="absolute h-[0.125rem] w-7 -rotate-45 bg-teal-300" />
            </span>
          </span>
        </button>

        <nav className="flex flex-col items-center font-mono">
          <ol className="space-y-9 [counter-reset:section]">
            {NAV_LINKS.map((link: NavLink) => (
              <li key={link.name}>
                <Link
                  className="flex flex-col items-center text-slate-300 transition-colors [counter-increment:section] before:mb-2 before:text-sm before:text-teal-300 before:content-['0'counter(section)'.'] hover:text-teal-300 focus:text-teal-300"
                  href={link.href}
                  scroll={false}
                  onClick={onCloseSidebar}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ol>

          <Link
            className="mt-20 rounded border border-teal-300 py-3 px-10 text-teal-300 transition-colors hover:bg-teal-300/10 focus:bg-teal-300/10"
            href={RESUME_LINK}
            target="_blank"
          >
            Resume
          </Link>
        </nav>
      </motion.div>
    </motion.div>
  );
}

// Prevents the sidebar logic running when it's not needed.
export default function Sidebar() {
  const { showSidebar, handleCloseSidebar } = useUI();

  return (
    <AnimatePresence>
      {showSidebar ? <SidebarView onCloseSidebar={handleCloseSidebar} /> : null}
    </AnimatePresence>
  );
}
