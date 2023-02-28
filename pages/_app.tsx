// pages/_app.tsx

import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
// <main className={`${inter.className}`}>
// </main>
