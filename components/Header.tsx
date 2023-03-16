import Link from "next/link";
import React, { ReactNode } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  DockNavigation,
  ThemeDropdown,
} from "@/components/layout/Dock/DockNavigation";
import styles from "./Header.module.css";

// `Header` navigation top level component.
//
// Source: https://github.com/nextauthjs/next-auth-example/blob/main/components/header.tsx
//
// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  return (
    <header className="z-50 disabled:py-4 ">
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>

      <div className="mx-auto md:max-w-screen-sm">
        <div className={`${styles.authbar} font-sans text-xs uppercase tracking-wider`}>
          <AuthComponent />
        </div>
      </div>

      <nav className="font-sans text-xs font-bold uppercase tracking-wider md:prose-sm">
        <div className="opacity-95 dark:prose-a:text-green-300/80">
          <Navigation />
        </div>
      </nav>
    </header>
  );
}

function AuthComponent() {
  // const { data: session } = useSession()
  // if (session) {
  //   return <>
  //     Signed in as {session.user.email} <br />
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  // return <>
  //   Not signed in <br />
  //   <button onClick={() => signIn()}>Sign in</button>
  // </>
  const { data: session, status } = useSession();
  const loading = status === "loading";
  return (
    <div className={`${styles.signedInStatus}`}>
      <p
        className={`nojs-show ${!session && loading ? styles.loading : styles.loaded} 
          `}
      >
        {!session && (
          <>
            <span className={styles.notSignedInText}>
              You are not signed in
            </span>
            <a
              href={`/api/auth/signin`}
              className={styles.buttonPrimary}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign in
            </a>
          </>
        )}

        {session?.user && (
          <>
            {session.user.image && (
              <span
                style={{ backgroundImage: `url('${session.user.image}')` }}
                className={styles.avatar}
              />
            )}
            <span className={styles.signedInText}>
              <small>Signed in as</small>
              <br />
              <strong>{session.user.email ?? session.user.name}</strong>
            </span>
            <a href={`/api/auth/signout`} className={styles.button} onClick={(e) => {
              e.preventDefault()
              signOut();
            }}
            >
              Sign out
            </a>
          </>
        )}
      </p>
    </div>
  );
}

function Navigation(props: {}) {
  return (
    <div className="mx-auto px-6 md:max-w-screen-sm lg:px-0">
      <div className="flex items-center justify-between ">
        <Link
          href="/"
          data-id="logo"
          className="logo h-full max-h-[1rem]  min-h-[1rem] w-full min-w-[1rem] max-w-[1rem] items-center place-self-center rounded-full bg-[var(--bg-logo-light)] after:hidden dark:bg-[var(--bg-logo-dark)] "
        >
          <span className="sr-only">Home</span>

        </Link>
        <Link className="after:hidden" href="/about">
          About
        </Link>
        <Link className="after:hidden" href="/projects">
          Projects
        </Link>
        <Link className="after:hidden" href="/work">
          Work
        </Link>
        <Link className="hidden after:hidden" href="/contact">
          Contact
        </Link>
        <ThemeDropdown />
      </div>
    </div>
  );
}
