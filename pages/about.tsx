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
  return (
    <div>
      <input type="range" />
    </div>

  )

}
