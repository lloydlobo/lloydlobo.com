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
  console.log(CONSOLE_MESSAGE)
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
const CONSOLE_MESSAGE = `
888    888          888 888                                                  888      888  888 
888    888          888 888                                                  888      888  888 
888    888          888 888                                                  888      888  888 
8888888888  .d88b.  888 888  .d88b.           888  888  888  .d88b.  888d888 888  .d88888  888 
888    888 d8P  Y8b 888 888 d88""88b          888  888  888 d88""88b 888P"   888 d88" 888  888 
888    888 88888888 888 888 888  888          888  888  888 888  888 888     888 888  888  Y8P 
888    888 Y8b.     888 888 Y88..88P d8b      Y88b 888 d88P Y88..88P 888     888 Y88b 888   "  
888    888  "Y8888  888 888  "Y88P"  88P       "Y8888888P"   "Y88P"  888     888  "Y88888  888 
                                     8P                                                       
                                     "                                                        
╔╦╗┌─┐┌─┐┬┌─┐┌┐┌┌─┐┌┬┐  ┌─┐┌┐┌┌┬┐  ┌┐ ┬ ┬┬┬ ┌┬┐  ┌┐ ┬ ┬  ╦  ┬  ┌─┐┬ ┬┌┬┐  ╦  ┌─┐┌┐ ┌─┐                                  
 ║║├┤ └─┐││ ┬│││├┤  ││  ├─┤│││ ││  ├┴┐│ │││  │   ├┴┐└┬┘  ║  │  │ │└┬┘ ││  ║  │ │├┴┐│ │                                  
═╩╝└─┘└─┘┴└─┘┘└┘└─┘─┴┘  ┴ ┴┘└┘─┴┘  └─┘└─┘┴┴─┘┴   └─┘ ┴   ╩═╝┴─┘└─┘ ┴ ─┴┘  ╩═╝└─┘└─┘└─┘o                                 
╔═╗┌─┐┬ ┬┌─┐┬─┐┌─┐┌┬┐  ┌┐ ┬ ┬  ╦  ╦┌─┐┬─┐┌─┐┌─┐┬      ╔╗╔┌─┐─┐ ┬┌┬┐╦╔═╗    ╦═╗┌─┐┌─┐┌─┐┌┬┐   ╔╦╗┌─┐┬┬  ┬ ┬┬┌┐┌┌┬┐╔═╗╔═╗╔═╗ 
╠═╝│ ││││├┤ ├┬┘├┤  ││  ├┴┐└┬┘  ╚╗╔╝├┤ ├┬┘│  ├┤ │      ║║║├┤ ┌┴┬┘ │ ║╚═╗    ╠╦╝├┤ ├─┤│   │     ║ ├─┤││  │││││││ ││║  ╚═╗╚═╗ 
╩  └─┘└┴┘└─┘┴└─└─┘─┴┘  └─┘ ┴    ╚╝ └─┘┴└─└─┘└─┘┴─┘ ┘  ╝╚╝└─┘┴ └─ ┴╚╝╚═╝ ┘  ╩╚═└─┘┴ ┴└─┘ ┴ ┘   ╩ ┴ ┴┴┴─┘└┴┘┴┘└┘─┴┘╚═╝╚═╝╚═╝o
`;
