import React from "react";
import {Nunito} from 'next/font/google';
import type { AppProps } from 'next/app'
import './global.css';

const nunitoFont = Nunito({
  subsets: ['latin'],
  weight: ['200', '400', '700']
})


export default function App({ Component, pageProps }: AppProps) {
  return <div className={nunitoFont.className}>
    <Component {...pageProps} />
  </div>
}
