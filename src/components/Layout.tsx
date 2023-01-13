import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import Header from './Header';

interface Props {
  children: ReactNode;
}

const Sidebar = dynamic(() => import('./Sidebar'), {
  ssr: false,
});

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="mx-auto max-w-7xl px-6 xs:px-12 md:px-24 lg:px-36">
        {children}
      </main>
    </>
  );
}
