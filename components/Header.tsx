import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./Header.module.css";
import { ThemeDropdown } from "@/components/ThemeDropdown";
import { GitHubIcon, MailIcon } from "@/components/icons";
import { LogoImage } from "@/components/common/LogoImage";
import { classNames } from "@/utils/classNames";

// `Header` navigation top level component.
//
// Source: https://github.com/nextauthjs/next-auth-example/blob/main/components/header.tsx
//
// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  return (
    <header
      className={classNames(
        "z-50 bg-on-secondary py-0.5",
        "prose-a:text-primary dark:prose-a:text-primary",
        "shadow-md dark:shadow-on-secondary/40 "
      )}
    >
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>

      <div className="mx-auto hidden md:max-w-screen-sm">
        <div className={`${styles.authbar} text-xs uppercase tracking-wider`}>
          <AuthComponent />
        </div>
      </div>

      <nav className="py-2 font-sans font-bold prose-a:prose-sm">
        <Navigation />
      </nav>
    </header>
  );
}

function Navigation() {
  return (
    <div
      className={classNames(
        "mx-auto px-6 py-1",
        "flex w-full items-center justify-between",
        "gap-x-2 gap-y-4 dark:prose-a:font-extrabold "
      )}
    >
      <div className="flex w-full gap-8">
        <Link href="/" data-id="logo" className="mr-auto">
          <LogoImage src={"/favicon-32x32.png"} alt="lloydlobo.com logo" />
        </Link>

        <div className="flex flex-1 items-center gap-x-4 tracking-wide">
          <Link href="/about">About</Link>
          <Link href="/crafts">Crafts</Link>
          <Link href="/projects">Projects</Link>
        </div>
      </div>

      <div
        className={classNames(
          "grid scale-[80%] grid-flow-col",
          "items-center justify-items-center gap-x-6 px-2"
        )}
      >
        <a href="https://github.com/lloydlobo/" title="Code">
          <GitHubIcon />
        </a>

        <a href="mailto:hello@lloydlobo.com" title="Email">
          <MailIcon />
        </a>

        <div title="Toggle theme">
          <ThemeDropdown />
        </div>
      </div>
    </div>
  );
}

function AuthComponent() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  return (
    <div className={`${styles.signedInStatus}`}>
      <p
        className={`nojs-show ${
          !session && loading ? styles.loading : styles.loaded
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
