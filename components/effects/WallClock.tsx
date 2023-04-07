import Link from "next/link";
import { useState, useEffect } from "react";
import { LogoImage } from "@/components/common/LogoImage";

export function WallClock() {
  // const [time, setTime] = useState(new Date());
  const [time, setTime] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (time === null) {
    return (
      <div className="blur">
        <Link href="/" data-id="logo" className="mr-auto">
          <LogoImage src={"/favicon-32x32.png"} alt="lloydlobo.com logo" />
        </Link>
      </div>
    );
  }

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegrees = (hours % 12) * 30 + minutes / 2;
  const minuteDegrees = minutes * 6;
  const secondDegrees = seconds * 6;

  return (
    <>
      <div className="grid place-content-center gap-2">
        <div
          className="clock mx-auto items-center"
          aria-hidden="true"
          data-state="closed"
          style={
            {
              "--now-h": hourDegrees,
              "--now-m": minuteDegrees,
              "--now-s": secondDegrees,
            } as React.CSSProperties
          } // type assertion here
        >
          <div className="second"></div>
          <div className="minute"></div>
          <div className="hour"></div>
        </div>
        <div
          style={{ fontFamily: "monospace" }}
          className="debug absolute -top-1/4 grid text-right text-xs"
        >
          <span className="after:content-['\FEFF°_h']">{hourDegrees}</span>
          <span className="after:content-['\FEFF°_m']">{minuteDegrees}</span>
          <span className="after:content-['\FEFF°_s']">{secondDegrees}</span>
        </div>
      </div>

      <style jsx>
        {`
          :root {
            --now-h: 0,
            --now-m: 0,
            --now-s: 0,
          }

          .clock {
             border-radius: 50%;
             border: 2.1px solid var(--bg-logo-dark);
             width: 1.25rem;
             aspect-ratio: 1;
             position: relative;
             padding: 2px;
             transform: rotate(-90deg);
          }

          .debug {
            opacity: 0;
          }

          .debug:hover {
            opacity: 1 !important;
          }

          .second,.minute,.hour {
            --color: var(--bg-logo-dark);
            border-top: 1px solid var(--color);
            position: absolute !important;
            left: 47%;
            top: 47%;
            opacity: 0.9;
            transform-origin: left;
            --radius: 9px;
            max-width: 45%;
            border-radius: 0  var(--radius) var(--radius) 0;
          }

          .second {
            width: 40%;
            height: 1px;
            transform: rotate(calc(var(--now-s)*1deg));
          }

          .minute {
            width: 40%;
            height: 1.25px;
            transform: rotate(calc(var(--now-m)*1deg));
          }

          .hour {
            width: 28%;
            height: 1px;
            transform: rotate(calc(var(--now-h)*1deg));
          }
        `}
      </style>
    </>
  );
}
