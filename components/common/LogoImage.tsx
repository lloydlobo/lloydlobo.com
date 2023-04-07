import Image from "next/image";
import { CSSProperties } from "react";

export interface LogoImageProps {
  src: string;
  alt: string;
}

export function LogoImage({ src, alt }: LogoImageProps) {
  const imageStyle: CSSProperties = {
    borderRadius: "100%",
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={32}
      height={32}
      style={imageStyle}
      className="h-8 w-8 rounded-full border-2 border-green-800/10 dark:border-green-400"
    />
  );
}
