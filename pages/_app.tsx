// pages/_app.tsx

import { SessionProvider } from "next-auth/react"
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

// https://memo-todo.vercel.app/login
// TODO: Refer to the `<Auth/>` componenet to redirect unauthorized access.

// TODO: Next-auth example typescript https://github.com/nextauthjs/next-auth-example

// export default function MyApp({ Component, pageProps }) {
export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <ThemeProvider attribute={"class"}
        forcedTheme={Component.theme || null}
      >
        <SessionProvider session={session}>
          <div className={`${ibmRegular.variable} font-serif ${charterRegularFont.variable}`}>
            <Component {...pageProps} />
          </div>
        </SessionProvider>
      </ThemeProvider>
    </>

  );
}


