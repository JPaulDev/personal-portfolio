import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import Header from './Header';
import SocialAndEmail from './SocialAndEmail';

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
      <SocialAndEmail />
      <main className="mx-auto flex max-w-7xl flex-col items-center gap-24 px-6 [counter-reset:heading] xs:px-12 md:px-24 lg:px-36">
        {children}
      </main>
    </>
  );
}
