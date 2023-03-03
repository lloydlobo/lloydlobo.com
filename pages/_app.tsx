// pages/_app.tsx

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={`${inter.className}`}>
        <Component {...pageProps} />
      </main>
    </>

  );
}
