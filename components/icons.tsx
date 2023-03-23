export function LogoIcon() {
  return (
    <>
      <div
        className="logo h-full max-h-[1rem] min-h-[1rem] w-full min-w-[1rem] max-w-[1rem] items-center place-self-center rounded-full bg-[var(--bg-logo-light)] after:hidden dark:bg-[var(--bg-logo-dark)] "
      >
        <img className="hidden" src="/favicon-32x32.png" alt=""/>
        <span className="sr-only">Home</span>
      </div>
    </>
  )
}

