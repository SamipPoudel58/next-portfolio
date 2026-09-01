import '../styles/index.scss';
import '../styles/globals.css';
import '../styles/prism-dracula.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import ReliefBanner from '../components/ReliefBanner';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReliefBanner />
      <div className="appShell">
        <Component {...pageProps} />
      </div>
      <Analytics />
    </>
  );
}

export default MyApp;
