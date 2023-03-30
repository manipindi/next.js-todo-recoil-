import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading.....</div>}>
      <Component {...pageProps} />
      </Suspense>
    </RecoilRoot>
  );
}
