import '../styles/index.scss';
import '../styles/globals.css';
import '../styles/prism-dracula.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
