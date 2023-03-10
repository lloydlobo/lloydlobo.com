import React, { useState } from "react";

export const EmailCopy = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "hello@lloydlobo.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div>
      <div>
        <div className="grid font-medium rounded-full">{email}</div>
        <button
          className="flex flex-row-reverse brightness-75 justify-between text-sm gap-0 text-end align-baseline "
          onClick={copyToClipboard}
        >
          <>
            {isCopied ? (
              <span className="text-green-400 dark:text-accent">Copied</span>
            ) : (
              <button className="uppercase font-bold tracking-wider decoration-green-400 dark:decoration-accent underline-offset-8 max-[320px]:text-xs">
                Copy{" "}
                <span className="opacity-0 hidden hover:opacity-100">
                  to clipboard
                </span>
              </button>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${isCopied
                  ? "animate-pulse text-green-400 dark:text-accent"
                  : "brightness-75"
                }
              h-6 w-6 origin-center scale-[.66]`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>
          </>
        </button>
      </div>
    </div>
  );
};
