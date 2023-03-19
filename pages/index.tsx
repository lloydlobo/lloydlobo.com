import Link from "next/link";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Section } from "@/components/Section";
import Layout from "@/components/Layout";
import { SolarControls, SolarSystem } from "@/components/effects/SolarSystem";
import { MouseBlob } from "@/components/effects/MouseBlob";
import { BackdropGridLines } from "@/components/effects/BackdropGridLines";

export default function IndexPage() {
  return (
    <>
      <div className="absolute mt-32 grayscale-[60%]"
        style={{
          position: "absolute",
          top: 200,
          inset: "0px",
          background: "radial-gradient(circle at bottom center, #0000ff60 ,transparent 70%)",
          opacity: 0.4,
          content: "",
        } }
      >
        <div
          style={{
            content: "",
            position: "absolute",
            background: "rgb(0, 2, 18)",
            width: "200%",
            left: "-50%",
            // aspectRatio: "1 / 0.7",
            aspectRatio: "1 / 0.5",
            borderRadius: "50% 50% 0 0",
            borderTop: "1px solid rgba(120, 119, 198, 0.4)",
            top: "50%",
          }}
        >
        </div>
        <Stars />
      </div>
      <div className="h-full min-h-screen">
        <Layout title="Home">
          <main className="relative mx-auto gap-12 h-full grid md:pt-6">
            <HeroIndex />

            <div className="mx-auto mt-40 flex flex-col-reverse">
              <SolarControls />
              <SolarSystem />
            </div>
          </main>
        </Layout>
      </div>
    </>
  );
}

const HeroIndex = () => {
  return (
    <>
      <Section>
        <article className=" space-y-8 py-0 disabled:lg:py-12">
          <p className="prose-xl mx-auto gap-1 rounded-2xl bg-white/40 text-justify font-medium lowercase leading-7 tracking-tight md:prose-2xl disabled:[word-spacing:0.45ch] dark:bg-on-primary/40 md:leading-8">
            <Link href="/about" className="tracking-wider dark:text-secondary">
              lloyd lobo.
            </Link>

            <span className="dark:text-primary/75">
              {" "}
              creating{" "}
              <span className="inline-flex">
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
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg>
              </span>{" "}
              software with the focus on innovative experiences that exceed
              client expectations.{" "}
              <em className="dark:text-secondary">software developer</em> with
              an <span id="roughblock">eye</span> for design and motion. deeply
              curious about functional and beautiful{" "}
              <svg
                // https://primer.style/design/foundations/icons/git-compare-24
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="inline-flex h-5 w-5"
              >
                <path d="M15 3.75H9v16.5h6V3.75zM16.5 20.25h3.375c1.035 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875H16.5v16.5zM4.125 3.75H7.5v16.5H4.125a1.875 1.875 0 01-1.875-1.875V5.625c0-1.036.84-1.875 1.875-1.875z" />
              </svg>{" "}
              apps. tend to use{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                className="inline-flex h-5 w-5"
              >
                <path d="M16.5 19.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm3.25-1.75a1.75 1.75 0 1 0 .001 3.501 1.75 1.75 0 0 0-.001-3.501Z"></path>
                <path d="M13.905 1.72a.75.75 0 0 1 0 1.06L12.685 4h4.065a3.75 3.75 0 0 1 3.75 3.75v8.75a.75.75 0 0 1-1.5 0V7.75a2.25 2.25 0 0 0-2.25-2.25h-4.064l1.22 1.22a.75.75 0 0 1-1.061 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM7.5 4.75a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0ZM4.25 6.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 4.25 6.5Z"></path>
                <path d="M10.095 22.28a.75.75 0 0 1 0-1.06l1.22-1.22H7.25a3.75 3.75 0 0 1-3.75-3.75V7.5a.75.75 0 0 1 1.5 0v8.75a2.25 2.25 0 0 0 2.25 2.25h4.064l-1.22-1.22a.748.748 0 0 1 .332-1.265.75.75 0 0 1 .729.205l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0Z"></path>
              </svg>{" "}
              open source and machine learning tools to architect efficient{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-flex h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                />
              </svg>{" "}
              code and tackle complex problems with{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-flex h-5 w-5"
              >
                <path d="M17.28 9.28a.75.75 0 0 0-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6.5-6.5Z"></path>
                <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"></path>
              </svg>{" "}
              ease.
            </span>
          </p>
        </article>
      </Section>
    </>
  );
};

export function DockNav() {
  return (
    <div className="gird fixed bottom-5 left-0 right-0  mx-auto  hidden">
      <div className="mx-auto w-fit rounded-full border border-secondary/10 border-opacity-10 bg-opacity-40 backdrop-blur-[1.5px]">
        <nav className="dock grid grid-flow-col place-items-center justify-between gap-1 overflow-y-hidden overflow-x-scroll rounded-full  p-2">
          <Link
            href="/"
            className="font-semibold underline decoration-accent underline-offset-8 hover:text-accent"
            data-te-toggle="tooltip"
            data-te-placement="top"
            data-te-ripple-init
            data-te-ripple-color="light"
            title="Home"
          >
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
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>

          <Link
            href="/work"
            className="flex items-center font-semibold underline decoration-accent underline-offset-8 hover:text-accent"
            data-te-toggle="tooltip"
            data-te-placement="top"
            data-te-ripple-init
            data-te-ripple-color="light"
            title="Work"
          >
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
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}

// RotateOriginTracker
//
// Rotate an element to face its origin #
// The atan2() function calculates the relative angle from one point to another. The function accepts two comma-separated values as its parameters: the y and x position of the other point, relative to the originating point which sits at origin 0,0.
// With the calculated value it’s possible to rotate elements so that they face each other, by using the Individual Transform Properties.
// In the example below, the boxes are rotated so that they face the location of the mouse. The mouse position is synced to a custom property through JavaScript.
//
// https://web.dev/css-trig-functions/
//
const RotateOriginTracker = () => {
  useEffect(() => {
    // Track mouse position over .origin
    const origin = document.getElementById("origin");

    document.body.onpointermove = (event) => {
      // origin.addEventListener("pointermove", (event) => {
      const { clientX, clientY } = event;
      // let x = evt.offsetX;
      // let y = evt.offsetY;

      origin.style.setProperty("--mouse-x", Math.round(clientX).toString());
      origin.style.setProperty("--mouse-y", Math.round(clientY).toString());
    };
    return () => { };
  }, []);

  return (
    <>
      <div>
        <p>
          <em>
            💡 With atan2, you can calculate the rotation for an object so that
            it points back to a specific point
          </em>
        </p>

        <div className="no-support" data-support="css-trig-fns">
          <p>
            🚨 Your browser does not support the CSS Trigonometric Functions.
            Therefore, this demo will not work properly. Please try Safari 15.4,
            Firefox 108, or Chrome 111.
          </p>
        </div>

        <div id="origin" className="origin">
          <div className="box"></div>
          <div className="box"></div>
        </div>

        <footer>
          <p>
            Demo for{" "}
            <a href="https://web.dev/css-trig-functions/" target="_top">
              https://web.dev/css-trig-functions/
            </a>
          </p>
        </footer>
      </div>

      <style jsx>
        {`
          div.box {
            --my-x: 200;
            --my-y: 300;

            /* Position the box inside its parent */
            position: absolute;
            width: 50px;
            aspect-ratio: 1;
            translate: calc((var(--my-x) * 1px)) calc(var(--my-y) * 1px);

            /* Rotate so that the box faces the mouse position */
            /* For this, take the box its own position and size (25 = half the width) into account */
            rotate: atan2(
              calc((var(--mouse-x) - var(--my-x) - 25) * 1),
              calc((var(--mouse-y) - var(--my-y) - 25) * -1)
            );
          }

          .origin {
            position: relative;
            width: 600px;
            height: 400px;
            border: 1px solid #333;
            --mouse-x: 0;
            --mouse-y: 0;
            // overflow: hidden;
            border-radius: 0.5em;
            touch-action: none;
          }

          .origin::before {
            content: "";
            height: 20px;
            width: 20px;
            translate: calc((var(--mouse-x) * 1px) - 50%)
              calc((var(--mouse-y) * 1px) - 50%);
            background: black;
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
          }

          div.box {
            --my-x: 50;
            --my-y: 300;

            width: 50px;
            height: 50px;

            background: linear-gradient(orange, red);
            border-top: 2px solid lime;
            transform-origin: 50% 50%;
            pointer-events: none;
            position: absolute;

            /* Position of the box inside its parent */
            translate: calc((var(--my-x) * 1px)) calc(var(--my-y) * 1px);

            /* Rotate so that the box faces the mouse position */
            /* For this, take the box’s own position and size (25 = half the width) into account */
            rotate: atan2(
              calc((var(--mouse-x) - var(--my-x) - 25) * 1),
              calc((var(--mouse-y) - var(--my-y) - 25) * -1)
            );
          }

          div.box:nth-child(2) {
            --my-x: 500;
            --my-y: 50;
          }

          div.box::before {
            content: "";
            display: block;
            width: 2px;
            height: 1000px;
            background: black;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 100%;
          }

          /* Non-demo styles below */
          @layer base {
            @layer reset {
              * {
                box-sizing: border-box;
              }
              body {
                margin: 0;
                padding: 0;
              }
              html,
              body {
                min-height: 100%;
              }
            }
            @layer layout {
              html {
                max-width: 84ch;
                padding: 3rem 2rem;
                margin: auto;
              }
              body {
                display: grid;
                place-content: safe center;
                gap: 1em;
              }

              html {
                --font-sans: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu,
                  Cantarell, Noto Sans, sans-serif, Segoe UI, Roboto, Ubuntu,
                  Cantarell, Noto Sans, sans-serif;
                --font-serif: ui-serif, serif;
                --font-mono: Dank Mono, Operator Mono, Inconsolata, Fira Mono,
                  ui-monospace, SF Mono, Monaco, Droid Sans Mono,
                  Source Code Pro, monospace;
              }
              body {
                font-family: var(--font-sans);
              }
              pre,
              code {
                font-family: var(--font-mono);
                font-size: 0.8rem;
              }
              input,
              button {
                font-family: inherit;
              }

              a,
              a:visited {
                color: blue;
              }

              h2 {
                margin-top: 2em;
              }

              summary {
                cursor: pointer;
              }

              dd + dt {
                margin-top: 0.5em;
              }

              footer {
                text-align: center;
                font-style: italic;
              }
            }

            @layer code {
              pre {
                border: 1px solid #dedede;
                padding: 1em;
                background: #f7f7f7;
                font-family: "Courier 10 Pitch", Courier, monospace;
                overflow-x: auto;
                border-left: 0.4em solid cornflowerblue;
                tab-size: 4;
              }

              code:not(pre code),
              output:not(code:has(output) output) {
                background: #f7f7f7;
                border: 1px solid rgb(0 0 0 / 0.2);
                padding: 0.1rem 0.3rem;
                margin: 0.1rem 0;
                border-radius: 0.2rem;
                display: inline-block;
              }
            }

            @layer support {
              .no-support,
              .has-support {
                margin: 1em 0;
                padding: 1em;
                border: 1px solid #ccc;
              }

              .no-support {
                background-color: #ff00002b;
                display: block;
              }
              .no-support[data-level="warn"] {
                background-color: #ffff002b;
              }
              .has-support {
                background-color: #00ff002b;
                display: none;
              }
              :is(.has-support, .no-support) > :first-child {
                margin-top: 0;
              }
              :is(.has-support, .no-support) > :last-child {
                margin-bottom: 0;
              }

              @supports (transform: scaleX(cos(360deg))) {
                .no-support[data-support="css-trig-fns"] {
                  display: none;
                }
                .has-support[data-support="css-trig-fns"] {
                  display: block;
                }
              }
            }
          }
        `}
      </style>
    </>
  );
};


export function ClockNav() {
  const [currentTime, setCurrentTime] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-opacity-50 text-center text-xs font-semibold backdrop-blur-[2px] ">
      <span className="relative h-full text-opacity-70 brightness-75 dark:text-secondary">
        {currentTime ? (
          <span>{currentTime}</span>
        ) : (
          <span className="blur-[0.5px]"> 0:00:00 AM</span>
        )}
      </span>
    </div>
  );
}

const Stars = () => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="872" height="731" fill="none" className="sc-bf8b3d70-0 eKUsdk"><g fill="#fff" opacity="0.7"><circle cx="227.718" cy="547.745" r="1.175" opacity="0.11" transform="rotate(-32.982 227.718 547.745)"></circle><circle cx="234.593" cy="551.333" r="0.881" transform="rotate(-32.982 234.593 551.333)"></circle><circle cx="244.14" cy="530.439" r="0.881" transform="rotate(-32.982 244.14 530.439)"></circle><circle cx="201.625" cy="556.626" r="0.881" transform="rotate(-32.982 201.625 556.626)"></circle><circle cx="184.75" cy="584.029" r="1.175" opacity="0.11" transform="rotate(-32.982 184.75 584.029)"></circle><circle cx="168.68" cy="579.757" r="0.587" transform="rotate(-32.982 168.68 579.757)"></circle><circle cx="239.023" cy="568.411" r="0.587" transform="rotate(-32.982 239.023 568.411)"></circle><circle cx="346.422" cy="498.718" r="0.587" transform="rotate(-32.982 346.422 498.718)"></circle><circle cx="382.851" cy="437.268" r="0.587" transform="rotate(-32.982 382.851 437.268)"></circle><circle cx="425.406" cy="460.761" r="0.587" transform="rotate(-32.982 425.406 460.761)"></circle><circle cx="66.984" cy="662.554" r="0.587" transform="rotate(-32.982 66.984 662.554)"></circle><circle cx="42.336" cy="640.746" r="0.587" opacity="0.11" transform="rotate(-32.982 42.336 640.746)"></circle><circle cx="28.508" cy="665.823" r="0.587" opacity="0.11" transform="rotate(-32.982 28.508 665.823)"></circle><circle cx="63.945" cy="684.832" r="0.587" opacity="0.11" transform="rotate(-32.982 63.945 684.832)"></circle><circle cx="168.398" cy="589.039" r="0.587" opacity="0.11" transform="rotate(-32.982 168.398 589.039)"></circle><circle cx="249.555" cy="586.785" r="0.587" opacity="0.11" transform="rotate(-32.982 249.555 586.785)"></circle><circle cx="340.937" cy="520.477" r="0.587" opacity="0.11" transform="rotate(-32.982 340.937 520.477)"></circle><circle cx="81.656" cy="635.531" r="0.587" opacity="0.3" transform="rotate(-32.982 81.656 635.531)"></circle><circle cx="177.695" cy="535.399" r="0.587" transform="rotate(-32.982 177.695 535.399)"></circle><circle cx="252.922" cy="485.182" r="0.587" transform="rotate(-32.982 252.922 485.182)"></circle><circle cx="173.609" cy="602.461" r="0.587" transform="rotate(-32.982 173.609 602.461)"></circle><circle cx="139.125" cy="624.841" r="0.587" opacity="0.3" transform="rotate(-32.982 139.125 624.841)"></circle><circle cx="78.914" cy="620.51" r="0.587" opacity="0.11" transform="rotate(-32.982 78.914 620.51)"></circle><circle cx="194.242" cy="541.467" r="0.587" opacity="0.3" transform="rotate(-32.982 194.242 541.467)"></circle><circle cx="188.062" cy="606.386" r="0.587" opacity="0.3" transform="rotate(-32.982 188.062 606.386)"></circle><circle cx="131.648" cy="649.995" r="0.587" opacity="0.3" transform="rotate(-32.982 131.648 649.995)"></circle><circle cx="95.945" cy="626.262" r="0.587" opacity="0.3" transform="rotate(-32.982 95.945 626.262)"></circle><circle cx="401.398" cy="425.934" r="0.587" opacity="0.3" transform="rotate(-32.982 401.398 425.934)"></circle><circle cx="308.976" cy="457.205" r="0.587" opacity="0.11" transform="rotate(-32.982 308.976 457.205)"></circle><circle cx="401.844" cy="455.746" r="0.587" opacity="0.11" transform="rotate(-32.982 401.844 455.746)"></circle><circle cx="279.765" cy="540.572" r="1.175" opacity="0.3" transform="rotate(-32.982 279.765 540.572)"></circle><circle cx="299.242" cy="506.931" r="1.175" opacity="0.11" transform="rotate(-32.982 299.242 506.931)"></circle><circle cx="287.968" cy="490.095" r="0.881" transform="rotate(-32.982 287.968 490.095)"></circle><circle cx="287.547" cy="563.88" r="0.881" transform="rotate(-32.982 287.547 563.88)"></circle><circle cx="457.492" cy="467.594" r="0.881" transform="rotate(-32.982 457.492 467.594)"></circle><circle cx="132.336" cy="666.701" r="0.881" transform="rotate(-32.982 132.336 666.701)"></circle><circle cx="59.468" cy="697.889" r="0.881" transform="rotate(-32.982 59.468 697.889)"></circle><circle cx="38.304" cy="683.619" r="0.881" transform="rotate(-32.982 38.304 683.619)"></circle><circle cx="270.718" cy="515.293" r="0.881" transform="rotate(-32.982 270.718 515.293)"></circle><circle cx="208.656" cy="607.374" r="0.881" transform="rotate(-32.982 208.656 607.374)"></circle><circle cx="346.547" cy="547.995" r="0.881" transform="rotate(-32.982 346.547 547.995)"></circle><circle cx="455.351" cy="429.776" r="0.881" transform="rotate(-32.982 455.351 429.776)"></circle><circle cx="449.593" cy="395.009" r="0.881" transform="rotate(-32.982 449.593 395.009)"></circle><circle cx="328.773" cy="463.965" r="1.175" opacity="0.3" transform="rotate(-32.982 328.773 463.965)"></circle><circle cx="306.07" cy="428.99" r="1.175" transform="rotate(-32.982 306.07 428.99)"></circle><circle cx="361.336" cy="458.586" r="0.881" transform="rotate(-32.982 361.336 458.586)"></circle><circle cx="372.601" cy="423.621" r="1.175" opacity="0.3" transform="rotate(-32.982 372.601 423.621)"></circle><circle cx="444.07" cy="426.948" r="1.175" opacity="0.3" transform="rotate(-32.982 444.07 426.948)"></circle><circle cx="387.07" cy="465.337" r="1.175" opacity="0.3" transform="rotate(-32.982 387.07 465.337)"></circle><circle cx="109.734" cy="657.216" r="1.175" opacity="0.3" transform="rotate(-32.982 109.734 657.216)"></circle><circle cx="52.242" cy="656.018" r="1.175" opacity="0.3" transform="rotate(-32.982 52.242 656.018)"></circle><circle cx="414.281" cy="425.277" r="1.175" opacity="0.11" transform="rotate(-32.982 414.281 425.277)"></circle><circle cx="111.82" cy="593.553" r="1.175" opacity="0.3" transform="rotate(-32.982 111.82 593.553)"></circle><circle cx="92.125" cy="592.332" r="1.175" opacity="0.11" transform="rotate(-32.982 92.125 592.332)"></circle><circle cx="108.648" cy="626.417" r="1.175" opacity="0.3" transform="rotate(-32.982 108.648 626.417)"></circle><circle cx="139.273" cy="606.191" r="0.881" transform="rotate(-32.982 139.273 606.191)"></circle><circle cx="300.453" cy="286.747" r="1.175" opacity="0.11" transform="rotate(-32.982 300.453 286.747)"></circle><circle cx="307.328" cy="290.336" r="0.881" transform="rotate(-32.982 307.328 290.336)"></circle><circle cx="316.875" cy="269.441" r="0.881" transform="rotate(-32.982 316.875 269.441)"></circle><circle cx="274.359" cy="295.629" r="0.881" transform="rotate(-32.982 274.359 295.629)"></circle><circle cx="257.484" cy="323.031" r="1.175" opacity="0.11" transform="rotate(-32.982 257.484 323.031)"></circle><circle cx="241.414" cy="318.76" r="0.587" transform="rotate(-32.982 241.414 318.76)"></circle><circle cx="311.758" cy="307.413" r="0.587" transform="rotate(-32.982 311.758 307.413)"></circle><circle cx="419.156" cy="237.721" r="0.587" transform="rotate(-32.982 419.156 237.721)"></circle><circle cx="455.586" cy="176.271" r="0.587" transform="rotate(-32.982 455.586 176.271)"></circle><circle cx="498.14" cy="199.766" r="0.587" transform="rotate(-32.982 498.14 199.766)"></circle><circle cx="139.719" cy="401.556" r="0.587" transform="rotate(-32.982 139.719 401.556)"></circle><circle cx="115.07" cy="379.748" r="0.587" opacity="0.11" transform="rotate(-32.982 115.07 379.748)"></circle><circle cx="101.242" cy="404.825" r="0.587" opacity="0.11" transform="rotate(-32.982 101.242 404.825)"></circle><circle cx="136.68" cy="423.834" r="0.587" opacity="0.11" transform="rotate(-32.982 136.68 423.834)"></circle><circle cx="241.133" cy="328.041" r="0.587" opacity="0.11" transform="rotate(-32.982 241.133 328.041)"></circle><circle cx="322.289" cy="325.787" r="0.587" opacity="0.11" transform="rotate(-32.982 322.289 325.787)"></circle><circle cx="413.672" cy="259.479" r="0.587" opacity="0.11" transform="rotate(-32.982 413.672 259.479)"></circle><circle cx="154.39" cy="374.534" r="0.587" opacity="0.3" transform="rotate(-32.982 154.39 374.534)"></circle><circle cx="250.43" cy="274.401" r="0.587" transform="rotate(-32.982 250.43 274.401)"></circle><circle cx="325.656" cy="224.184" r="0.587" transform="rotate(-32.982 325.656 224.184)"></circle><circle cx="246.344" cy="341.464" r="0.587" transform="rotate(-32.982 246.344 341.464)"></circle><circle cx="211.859" cy="363.843" r="0.587" opacity="0.3" transform="rotate(-32.982 211.859 363.843)"></circle><circle cx="151.648" cy="359.513" r="0.587" opacity="0.11" transform="rotate(-32.982 151.648 359.513)"></circle><circle cx="266.976" cy="280.469" r="0.587" opacity="0.3" transform="rotate(-32.982 266.976 280.469)"></circle><circle cx="260.797" cy="345.388" r="0.587" opacity="0.3" transform="rotate(-32.982 260.797 345.388)"></circle><circle cx="204.383" cy="388.998" r="0.587" opacity="0.3" transform="rotate(-32.982 204.383 388.998)"></circle><circle cx="168.68" cy="365.264" r="0.587" opacity="0.3" transform="rotate(-32.982 168.68 365.264)"></circle><circle cx="474.133" cy="164.936" r="0.587" opacity="0.3" transform="rotate(-32.982 474.133 164.936)"></circle><circle cx="381.711" cy="196.208" r="0.587" opacity="0.11" transform="rotate(-32.982 381.711 196.208)"></circle><circle cx="474.578" cy="194.749" r="0.587" opacity="0.11" transform="rotate(-32.982 474.578 194.749)"></circle><circle cx="352.5" cy="279.575" r="1.175" opacity="0.3" transform="rotate(-32.982 352.5 279.575)"></circle><circle cx="371.976" cy="245.933" r="1.175" opacity="0.11" transform="rotate(-32.982 371.976 245.933)"></circle><circle cx="360.703" cy="229.097" r="0.881" transform="rotate(-32.982 360.703 229.097)"></circle><circle cx="360.281" cy="302.882" r="0.881" transform="rotate(-32.982 360.281 302.882)"></circle><circle cx="530.226" cy="206.596" r="0.881" transform="rotate(-32.982 530.226 206.596)"></circle><circle cx="205.07" cy="405.703" r="0.881" transform="rotate(-32.982 205.07 405.703)"></circle><circle cx="132.203" cy="436.891" r="0.881" transform="rotate(-32.982 132.203 436.891)"></circle><circle cx="111.039" cy="422.621" r="0.881" transform="rotate(-32.982 111.039 422.621)"></circle><circle cx="343.453" cy="254.296" r="0.881" transform="rotate(-32.982 343.453 254.296)"></circle><circle cx="281.39" cy="346.376" r="0.881" transform="rotate(-32.982 281.39 346.376)"></circle><circle cx="419.281" cy="286.997" r="0.881" transform="rotate(-32.982 419.281 286.997)"></circle><circle cx="528.086" cy="168.778" r="0.881" transform="rotate(-32.982 528.086 168.778)"></circle><circle cx="522.328" cy="134.012" r="0.881" transform="rotate(-32.982 522.328 134.012)"></circle><circle cx="401.507" cy="202.967" r="1.175" opacity="0.3" transform="rotate(-32.982 401.507 202.967)"></circle><circle cx="378.804" cy="167.992" r="1.175" transform="rotate(-32.982 378.804 167.992)"></circle><circle cx="434.07" cy="197.588" r="0.881" transform="rotate(-32.982 434.07 197.588)"></circle><circle cx="445.336" cy="162.623" r="1.175" opacity="0.3" transform="rotate(-32.982 445.336 162.623)"></circle><circle cx="516.804" cy="165.95" r="1.175" opacity="0.3" transform="rotate(-32.982 516.804 165.95)"></circle><circle cx="459.804" cy="204.339" r="1.175" opacity="0.3" transform="rotate(-32.982 459.804 204.339)"></circle><circle cx="182.468" cy="396.218" r="1.175" opacity="0.3" transform="rotate(-32.982 182.468 396.218)"></circle><circle cx="124.976" cy="395.021" r="1.175" opacity="0.3" transform="rotate(-32.982 124.976 395.021)"></circle><circle cx="487.015" cy="164.279" r="1.175" opacity="0.11" transform="rotate(-32.982 487.015 164.279)"></circle><circle cx="184.554" cy="332.556" r="1.175" opacity="0.3" transform="rotate(-32.982 184.554 332.556)"></circle><circle cx="164.859" cy="331.334" r="1.175" opacity="0.11" transform="rotate(-32.982 164.859 331.334)"></circle><circle cx="181.382" cy="365.42" r="1.175" opacity="0.3" transform="rotate(-32.982 181.382 365.42)"></circle><circle cx="212.008" cy="345.193" r="0.881" transform="rotate(-32.982 212.008 345.193)"></circle><circle cx="609.586" cy="195.828" r="1.175" opacity="0.11" transform="rotate(-32.982 609.586 195.828)"></circle><circle cx="616.461" cy="199.416" r="0.881" transform="rotate(-32.982 616.461 199.416)"></circle><circle cx="626.008" cy="178.522" r="0.881" transform="rotate(-32.982 626.008 178.522)"></circle><circle cx="583.492" cy="204.709" r="0.881" transform="rotate(-32.982 583.492 204.709)"></circle><circle cx="566.617" cy="232.111" r="1.175" opacity="0.11" transform="rotate(-32.982 566.617 232.111)"></circle><circle cx="550.547" cy="227.84" r="0.587" transform="rotate(-32.982 550.547 227.84)"></circle><circle cx="620.89" cy="216.494" r="0.587" transform="rotate(-32.982 620.89 216.494)"></circle><circle cx="728.289" cy="146.801" r="0.587" transform="rotate(-32.982 728.289 146.801)"></circle><circle cx="764.719" cy="85.351" r="0.587" transform="rotate(-32.982 764.719 85.351)"></circle><circle cx="807.273" cy="108.844" r="0.587" transform="rotate(-32.982 807.273 108.844)"></circle><circle cx="448.851" cy="310.637" r="0.587" transform="rotate(-32.982 448.851 310.637)"></circle><circle cx="424.203" cy="288.829" r="0.587" opacity="0.11" transform="rotate(-32.982 424.203 288.829)"></circle><circle cx="410.375" cy="313.906" r="0.587" opacity="0.11" transform="rotate(-32.982 410.375 313.906)"></circle><circle cx="445.812" cy="332.915" r="0.587" opacity="0.11" transform="rotate(-32.982 445.812 332.915)"></circle><circle cx="550.265" cy="237.121" r="0.587" opacity="0.11" transform="rotate(-32.982 550.265 237.121)"></circle><circle cx="631.414" cy="234.868" r="0.587" opacity="0.11" transform="rotate(-32.982 631.414 234.868)"></circle><circle cx="722.805" cy="168.56" r="0.587" opacity="0.11" transform="rotate(-32.982 722.805 168.56)"></circle><circle cx="463.523" cy="283.614" r="0.587" opacity="0.3" transform="rotate(-32.982 463.523 283.614)"></circle><circle cx="559.562" cy="183.482" r="0.587" transform="rotate(-32.982 559.562 183.482)"></circle><circle cx="634.789" cy="133.265" r="0.587" transform="rotate(-32.982 634.789 133.265)"></circle><circle cx="555.476" cy="250.545" r="0.587" transform="rotate(-32.982 555.476 250.545)"></circle><circle cx="520.992" cy="272.924" r="0.587" opacity="0.3" transform="rotate(-32.982 520.992 272.924)"></circle><circle cx="460.781" cy="268.593" r="0.587" opacity="0.11" transform="rotate(-32.982 460.781 268.593)"></circle><circle cx="576.109" cy="189.55" r="0.587" opacity="0.3" transform="rotate(-32.982 576.109 189.55)"></circle><circle cx="569.93" cy="254.469" r="0.587" opacity="0.3" transform="rotate(-32.982 569.93 254.469)"></circle><circle cx="513.515" cy="298.078" r="0.587" opacity="0.3" transform="rotate(-32.982 513.515 298.078)"></circle><circle cx="477.812" cy="274.345" r="0.587" opacity="0.3" transform="rotate(-32.982 477.812 274.345)"></circle><circle cx="783.265" cy="74.017" r="0.587" opacity="0.3" transform="rotate(-32.982 783.265 74.017)"></circle><circle cx="690.844" cy="105.288" r="0.587" opacity="0.11" transform="rotate(-32.982 690.844 105.288)"></circle><circle cx="783.711" cy="103.829" r="0.587" opacity="0.11" transform="rotate(-32.982 783.711 103.829)"></circle><circle cx="661.632" cy="188.655" r="1.175" opacity="0.3" transform="rotate(-32.982 661.632 188.655)"></circle><circle cx="681.109" cy="155.014" r="1.175" opacity="0.11" transform="rotate(-32.982 681.109 155.014)"></circle><circle cx="669.836" cy="138.178" r="0.881" transform="rotate(-32.982 669.836 138.178)"></circle><circle cx="669.414" cy="211.963" r="0.881" transform="rotate(-32.982 669.414 211.963)"></circle><circle cx="839.359" cy="115.677" r="0.881" transform="rotate(-32.982 839.359 115.677)"></circle><circle cx="514.203" cy="314.784" r="0.881" transform="rotate(-32.982 514.203 314.784)"></circle><circle cx="441.336" cy="345.972" r="0.881" transform="rotate(-32.982 441.336 345.972)"></circle><circle cx="420.172" cy="331.702" r="0.881" transform="rotate(-32.982 420.172 331.702)"></circle><circle cx="652.586" cy="163.376" r="0.881" transform="rotate(-32.982 652.586 163.376)"></circle><circle cx="590.523" cy="255.457" r="0.881" transform="rotate(-32.982 590.523 255.457)"></circle><circle cx="728.414" cy="196.078" r="0.881" transform="rotate(-32.982 728.414 196.078)"></circle><circle cx="837.219" cy="77.859" r="0.881" transform="rotate(-32.982 837.219 77.86)"></circle><circle cx="831.461" cy="43.092" r="0.881" transform="rotate(-32.982 831.461 43.092)"></circle><circle cx="710.632" cy="112.048" r="1.175" opacity="0.3" transform="rotate(-32.982 710.632 112.048)"></circle><circle cx="687.937" cy="77.073" r="1.175" transform="rotate(-32.982 687.937 77.073)"></circle><circle cx="743.203" cy="106.669" r="0.881" transform="rotate(-32.982 743.203 106.669)"></circle><circle cx="754.468" cy="71.704" r="1.175" opacity="0.3" transform="rotate(-32.982 754.468 71.704)"></circle><circle cx="825.937" cy="75.031" r="1.175" opacity="0.3" transform="rotate(-32.982 825.937 75.03)"></circle><circle cx="768.937" cy="113.42" r="1.175" opacity="0.3" transform="rotate(-32.982 768.937 113.42)"></circle><circle cx="491.601" cy="305.299" r="1.175" opacity="0.3" transform="rotate(-32.982 491.601 305.299)"></circle><circle cx="434.109" cy="304.102" r="1.175" opacity="0.3" transform="rotate(-32.982 434.109 304.102)"></circle><circle cx="796.148" cy="73.36" r="1.175" opacity="0.11" transform="rotate(-32.982 796.148 73.36)"></circle><circle cx="493.687" cy="241.636" r="1.175" opacity="0.3" transform="rotate(-32.982 493.687 241.636)"></circle><circle cx="473.992" cy="240.415" r="1.175" opacity="0.11" transform="rotate(-32.982 473.992 240.415)"></circle><circle cx="490.515" cy="274.5" r="1.175" opacity="0.3" transform="rotate(-32.982 490.515 274.5)"></circle><circle cx="521.14" cy="254.274" r="0.881" transform="rotate(-32.982 521.14 254.274)"></circle></g></svg>
  )
}
