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
      <main>{children}</main>
    </>
  );
}
