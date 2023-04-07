import markdownStyles from "@/components/projects/markdown-styles.module.css";
import { classNames } from "@/utils/classNames";
import React from "react";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <article
      className={classNames(
        "mx-auto",
        "prose-img:aspect-video prose-img:w-fit prose-img:object-cover prose-img:object-top ",
        "prose-img:rounded-sm prose-img:shadow-2xl",
      )}
    >
      <div className="mx-auto disabled:max-w-2xl">
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  );
}
