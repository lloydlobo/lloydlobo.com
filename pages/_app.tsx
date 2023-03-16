// pages/_app.tsx
import { SessionProvider } from "next-auth/react";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";

import type { AppProps } from "next/app";
import type { Session } from "next-auth";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // : AppProps<{ session: Session }>
  return (
    <>
      <SessionProvider session={session}>
        <ThemeProvider
          attribute={"class"}
          forcedTheme={Component.theme || null}
        >
          <div
            className={`${ibmRegular.variable} font-serif ${charterRegularFont.variable}`}
          >
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}

// Font files can be colocated inside of `pages`
const charterRegularFont = localFont({
  src: "./fonts/Charter/charter_regular.woff2",
  variable: "--font-charter",
});
const ibmRegular = localFont({
  variable: "--font-ibm",
  src: [
    {
      path: "./fonts/ibm-plex/IBMPlexSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});


// https://memo-todo.vercel.app/login
// TODO: Refer to the `<Auth/>` componenet to redirect unauthorized access.
// TODO: Next-auth example typescript https://github.com/nextauthjs/next-auth-example
// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
