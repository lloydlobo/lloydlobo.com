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


export const Sun = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      style={{ transform: "rotate(90deg)" }}
      className="sc-a794b73f-1 cfurEx"
    >
      <mask id="moon-mask-main-nav">
        <rect x="0" y="0" width="18" height="18" fill="#FFF"></rect>
        <circle cx="25" cy="0" r="8" fill="currentColor"></circle>
      </mask>
      <circle
        cx="9"
        cy="9"
        fill="currentColor"
        mask="url(#moon-mask-main-nav)"
        r="5"
      ></circle>
      <g>
        <circle
          cx="17"
          cy="9"
          r="1.5"
          fill="currentColor"
          style={{ transformOrigin: "center center", transform: "scale(1)" }}
        ></circle>
        <circle
          cx="13"
          cy="15.928203"
          r="1.5"
          fill="currentColor"
          style={{ transformOrigin: "center center", transform: "scale(1)" }}
        ></circle>
        <circle
          cx="5"
          cy="15.928203"
          r="1.5"
          fill="currentColor"
          style={{ transformOrigin: "center center", transform: "scale(1)" }}
        ></circle>
        <circle
          cx="1"
          cy="9"
          r="1.5"
          fill="currentColor"
          style={{ transformOrigin: "center center", transform: "scale(1)" }}
        ></circle>
        <circle
          cx="5"
          cy="2.071797"
          r="1.5"
          fill="currentColor"
          style={{ transformOrigin: "center center", transform: "scale(1)" }}
        ></circle>
        <circle
          cx="13"
          cy="2.071797"
          r="1.5"
          fill="currentColor"
          style={{ transformOrigin: "center center", transform: "scale(1)" }}
        ></circle>
      </g>
    </svg>
  );
};

export const Moon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      style={{ transform: "rotate(40deg)" }}
      className=""
    >
      <mask id="moon-mask-main-nav">
        <rect x="0" y="0" width="18" height="18" fill="#FFF"></rect>
        <circle cx="10" cy="2" r="8" fill="currentColor"></circle>
      </mask>
      <circle
        cx="9"
        cy="9"
        fill="currentColor"
        mask="url(#moon-mask-main-nav)"
        r="8"
      ></circle>
      <g>
        <circle
          cx="17"
          cy="9"
          r="1.5"
          fill="currentColor"
          style={{
            transformOrigin: "center center 0px",
            transform: "scale(0)",
          }}
        ></circle>
        <circle
          cx="13"
          cy="15.928203"
          r="1.5"
          fill="currentColor"
          style={{
            transformOrigin: "center center 0px",
            transform: "scale(0)",
          }}
        ></circle>
        <circle
          cx="5"
          cy="15.928203"
          r="1.5"
          fill="currentColor"
          style={{
            transformOrigin: "center center 0px",
            transform: "scale(0)",
          }}
        ></circle>
        <circle
          cx="1"
          cy="9"
          r="1.5"
          fill="currentColor"
          style={{
            transformOrigin: "center center 0px",
            transform: "scale(0)",
          }}
        ></circle>
        <circle
          cx="5"
          cy="2.071797"
          r="1.5"
          fill="currentColor"
          style={{
            transformOrigin: "center center 0px",
            transform: "scale(0)",
          }}
        ></circle>
        <circle
          cx="13"
          cy="2.071797"
          r="1.5"
          fill="currentColor"
          style={{
            transformOrigin: "center center 0px",
            transform: "scale(0)",
          }}
        ></circle>
      </g>
    </svg>
  );
};

export const GitHubIcon = () => {
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

export const MailIcon = () => {
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
