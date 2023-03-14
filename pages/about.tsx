import Layout from "@/components/Layout";
import { Section } from "@/components/Section";
import React, { useState } from "react";

/* Path commands
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d

Path commands are instructions that define a path to be drawn. Each command is composed of a command letter and numbers that represent the command parameters.

SVG defines 6 types of path commands, for a total of 20 commands:

MoveTo: M, m
LineTo: L, l, H, h, V, v
Cubic Bézier Curve: C, c, S, s
Quadratic Bézier Curve: Q, q, T, t
Elliptical Arc Curve: A, a
ClosePath: Z, z */

const LABELS = [
  "years",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "",
];
const SIZES = [100, 90, 80, 70, 60, 50, 40, 30];
const COLORS = [
  "violet",
  "indigo",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
  "violet",
  "indigo",
];

//REFERENCE
// https://rsms.me/projects/time-counter/?theme=10&labels=yes&pulse=yes&refdate=1983-05-17T02:00:00.000Z
export default function AboutPage() {
  const GOLDEN_RATIO = 1.618;
  let frequency = 0.001;
  const [f, setF] = useState(frequency);
  return (
    <Layout>
      <main className="">
        <div className="w-96 place-self-center h-fit aspect-square  relative items-center justify-center flex">
          <article className="p-12 place-self-center mx-auto flex overflow-hidden min-w-[75vw] continer aspect-square inset-0 absolute">
            {SIZES.map((radius, index) => (
              <div key={`circle-${index}`}>
                <svg
                  height="300"
                  onClick={() =>
                    setF((f + Math.abs(Math.sin(f * GOLDEN_RATIO))) % 10)
                  }
                  width="300"
                  style={{
                    filter: `hue-rotate(${((radius / f) * GOLDEN_RATIO * index) /
                      Math.sin(Math.PI / radius)
                      }deg)`,
                  }}
                  className={`scale-150 hue-rotate-[30%] absolute opacity-30 saturate-75`}
                >
                  <circle
                    cx="150"
                    cy="150"
                    r={radius * 1}
                    stroke="currentColor"
                    strokeWidth="1"
                    fill={COLORS[index]}
                  />
                  Sorry, inline SVG isn't supported by your browser.
                </svg>
                <p
                  style={{
                    top: `${radius * 2.0 + 12}px`,
                  }}
                  className={`absolute -rotate-[0deg] text-start  z-50`}
                >
                  {LABELS[LABELS.length - 1 - index]}
                </p>
              </div>
            ))}
          </article>
        </div>
      </main>
    </Layout>
  );
}
