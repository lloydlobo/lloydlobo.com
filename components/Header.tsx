import Link from "next/link";
import React, { ReactNode } from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import {
  DockNavigation,
  ThemeDropdown,
} from "@/components/layout/Dock/DockNavigation";
import styles from "./Header.module.css"

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  return (
    <header className="disabled:py-4 z-50 ">
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.signedInStatus}>
      </div>

      <nav className="uppercase font-sans text-xs md:prose-sm font-bold tracking-wider">
        <div className="dark:prose-a:text-green-300/80 opacity-95">
          <Navigation />
        </div>
      </nav>
    </header>

  )

}

function AuthComponent() {
  const { data: session } = useSession()
  if (session) {
    return <>
      Signed in as {session.user.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br />
    <button onClick={() => signIn()}>Sign in</button>
  </>
}

function Navigation(props: {}) {
  return (
    <div className="px-6 lg:px-0 md:max-w-screen-sm mx-auto">
      <div className="flex justify-between items-center ">
        <Link
          href="/"
          data-id="logo"
          className="logo after:hidden items-center  w-full h-full min-w-[1rem] place-self-center max-w-[1rem] min-h-[1rem] max-h-[1rem] rounded-full bg-[var(--bg-logo-light)] dark:bg-[var(--bg-logo-dark)] "
        ></Link>
        <Link className="after:hidden" href="/about">
          About
        </Link>
        <Link className="after:hidden" href="/projects">
          Projects
        </Link>
        <Link className="after:hidden" href="/work">
          Work
        </Link>
        <Link className="after:hidden hidden" href="/contact">
          Contact
        </Link>
        <AuthComponent />
        <ThemeDropdown />
      </div>
    </div>
  );
};

