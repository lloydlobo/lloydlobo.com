import Link from "next/link";
import React, { ReactNode } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./Header.module.css";
import { LogoIcon } from "@/components/icons";
import { ThemeDropdown } from "@/components/layout/Dock/DockNavigation";

// `Header` navigation top level component.
//
// Source: https://github.com/nextauthjs/next-auth-example/blob/main/components/header.tsx
//
// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  return (
    <header className="z-50 py-4 ">
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>

      <div className="mx-auto hidden md:max-w-screen-sm">
        <div className={`${styles.authbar} text-xs uppercase tracking-wider`}>
          <AuthComponent />
        </div>
      </div>

      <nav className="py-2 font-bold">
        <div className="opacity-95 dark:prose-a:text-green-300/80">
          <Navigation />
        </div>
      </nav>
    </header>
  );
}

function AuthComponent() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  return (
    <div className={`${styles.signedInStatus}`}>
      <p
        className={`nojs-show ${!session && loading ? styles.loading : styles.loaded
          } 
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
            <a
              href={`/api/auth/signout`}
              className={styles.button}
              onClick={(e) => {
                e.preventDefault();
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
    <div className="mx-auto px-6">
      <div className="flex items-start gap-x-2 gap-y-4 flex-wrap justify-between  ">
        <Link href="/" data-id="logo" className="m-0 p-0" >
          <img src="/favicon-32x32.png" alt="logo" style={{ borderRadius: "100%", border: "3px solid" }} className="w-8 dark:border-green-400 h-8" />
        </Link>
        <Link href="/about">About</Link>
        <Link href="/crafts">Crafts</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact" className="hidden">Contact</Link>

        <>
          <div className="grid grid-flow-col-dense  items-baseline scale-90 origin-bottom-right gap-4 md:gap-6">
            <a
              href="https://github.com/lloydlobo/"
              className=""
              data-te-toggle="tooltip"
              data-te-placement="top"
              data-te-ripple-init
              data-te-ripple-color="light"
              title="Code"
            >
              <div className="">
                <GitHubIcon />
              </div>
            </a>

            <a
              href="mailto:hello@lloydlobo.com"
              className=""
              data-te-toggle="tooltip"
              data-te-placement="top"
              data-te-ripple-init
              data-te-ripple-color="light"
              title="Email"
            >
              <MailIcon />
            </a>

            <div title="Toggle theme">
              <ThemeDropdown />
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

const GitHubIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
      ></path>
    </svg>
  );
};

const MailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
};
