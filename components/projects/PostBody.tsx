import markdownStyles from "@/components/projects/markdown-styles.module.css";
import React from "react";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <article className="mx-auto">
      <div className="mx-auto disabled:max-w-2xl">
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </article>
  );
}
