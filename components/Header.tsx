import Link from "next/link";
import React, { ReactNode } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./Header.module.css";
import { ThemeDropdown } from "@/components/ThemeDropdown";
import { CSSProperties } from "react";
import { GitHubIcon, MailIcon } from "@/components/icons";

// `Header` navigation top level component.
//
// Source: https://github.com/nextauthjs/next-auth-example/blob/main/components/header.tsx
//
// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  return (
    <header className="z-50 py-0.5 shadow-md dark:shadow-on-secondary/40">
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>

      <div className="mx-auto hidden md:max-w-screen-sm">
        <div className={`${styles.authbar} text-xs uppercase tracking-wider`}>
          <AuthComponent />
        </div>
      </div>

      <nav className="py-2 font-sans  font-bold prose-a:prose-sm">
        <Navigation />
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

interface LogoImageProps {
  src: string;
  alt: string;
}

const LogoImage = ({ src, alt }: LogoImageProps) => {
  const imageStyle: CSSProperties = {
    borderRadius: "100%",
  };

  return (
    <img
      src={src}
      alt={alt}
      style={imageStyle}
      className="h-8 w-8 rounded-full border-2 border-green-800/10 dark:border-green-400"
    />
  );
};

function Navigation() {
  return (
    <div className="mx-auto py-1 px-6">
      <div className="flex w-full items-center justify-between gap-x-2 gap-y-4 dark:prose-a:font-extrabold dark:prose-a:text-green-300  ">
        <div className="flex w-full gap-8">
          <Link href="/" data-id="logo" className="mr-auto">
            <LogoImage src={"/favicon-32x32.png"} alt="lloydlobo.com logo" />
          </Link>
          <div className="flex flex-1 items-center gap-x-3 tracking-wide">
            <Link href="/about">About</Link>
            <Link href="/crafts">Crafts</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact" className="hidden">
              Contact
            </Link>
          </div>
        </div>

        <div className="grid scale-[80%] grid-flow-col items-center justify-items-center gap-x-4 px-2">
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

          <div title="Toggle theme" className="rounded-full leading-none">
            <ThemeDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}
