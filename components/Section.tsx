import React, { ReactNode } from "react";

type PropsSection = {
  children?: ReactNode;
};

export const Section = ({ children }: PropsSection) => {
  return <div className={`mx-auto px-6`}>{children}</div>;
};
