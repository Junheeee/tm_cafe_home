import type { AppProps } from 'next/app';
import '../styles/reset.css';
import '../styles/common.css';

interface MyAppProps extends AppProps {
  // emotionCache?: EmotionCache;
  // dehydratedState: DehydratedState;
}

export default function App(props: MyAppProps) {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}
