// pages/_app.tsx

import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute={"class"}
        forcedTheme={Component.theme || null}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>

  );
}


