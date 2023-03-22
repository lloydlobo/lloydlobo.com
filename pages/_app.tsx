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
  console.log(CONSOLE_EASTER_EGG);
  return (
    <>
      <SessionProvider session={session}>
        <ThemeProvider
          attribute={"class"}
          forcedTheme={Component.theme || null}
        >
          <div
            className={`font-serif ${ibmRegular.variable} ${charterRegularFont.variable}`}
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

// Calvin S ASCII Font
const CONSOLE_EASTER_EGG = `
hh                        tt    hh                               
hh        eee  yy   yy    tt    hh        eee  rr rr    eee   
hhhhhh  ee   e yy   yy    tttt  hhhhhh  ee   e rrr  r ee   e  
hh   hh eeeee   yyyyyy    tt    hh   hh eeeee  rr     eeeee   
hh   hh  eeeee      yy     tttt hh   hh  eeeee rr      eeeee  
                yyyyy                                            

+-+-+-+-+-+-+-+-+ +-+-+-+ +-+-+-+-+-+                  
|d|e|s|i|g|n|e|d| |a|n|d| |b|u|i|l|t|                  
+-+-+-+-+-+-+-+-+ +-+-+-+ +-+-+-+-+-+                  
+-+-+ +-+-+-+-+-+ +-+-+-+-+-+                          
|b|y| |l|l|o|y|d| |l|o|b|o|.|                          
+-+-+ +-+-+-+-+-+ +-+-+-+-+-+                          
+-+-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+-+-+                  
|P|o|w|e|r|e|d| |b|y| |v|e|r|c|e|l|,|                  
+-+-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+-+-+                  
+-+-+-+-+-+-+-+ +-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+-+-+-+
|n|e|x|t|j|s|,| |r|e|a|c|t|,| |t|a|i|l|w|i|n|d|c|s|s|.|
+-+-+-+-+-+-+-+ +-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+-+-+-+
`;
