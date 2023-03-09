// pages/_app.tsx

import localFont from 'next/font/local'
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

// Font files can be colocated inside of `pages`
const charterRegularFont = localFont({
  src: './fonts/Charter/charter_regular.woff2', variable: '--font-charter',
});
const ibmRegular = localFont({
  src: [
    { path: './fonts/ibm-plex/IBMPlexSans-Regular.otf', weight: '400', style: 'normal', },
    // { path: './fonts/ibm-plex/IBMPlexSans-Bold.otf', weight: '700', style: 'bold', },
    // { path: './fonts/ibm-plex/IBMPlexSans-Italic.otf', weight: '400', style: 'italic', },
  ],
  variable: '--font-ibm',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute={"class"}
        forcedTheme={Component.theme || null}
      >
        <div className={`${ibmRegular.variable} font-sans ${charterRegularFont.variable}`}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>

  );
}


