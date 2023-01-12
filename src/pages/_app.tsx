import { Layout } from '@components';
import localFont from '@next/font/local';
import '@styles/globals.css';
import { UIProvider } from 'contexts/UIContext';
import type { AppProps } from 'next/app';

const calibre = localFont({
  src: [
    {
      path: './fonts/Calibre-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Calibre-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Calibre-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-calibre',
});

const sfMono = localFont({
  src: [
    {
      path: './fonts/SFMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SFMono-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/SFMono-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-sf-mono',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${sfMono.variable} ${calibre.variable} font-sans`}>
      <UIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </div>
  );
}
