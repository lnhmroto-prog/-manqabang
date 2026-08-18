import Image from "next/image";
import type { CSSProperties } from "react";

type FadeEdge = "left" | "right" | "top" | "bottom";

type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** Edges of the photo that dissolve into the page's cream background. */
  fade?: FadeEdge[];
};

const FADE_GRADIENTS: Record<FadeEdge, string> = {
  right: "linear-gradient(to right, black 58%, transparent 96%)",
  left: "linear-gradient(to left, black 58%, transparent 96%)",
  top: "linear-gradient(to bottom, transparent 0%, black 15%)",
  bottom: "linear-gradient(to top, transparent 0%, black 22%)",
};

export default function CoverImage({
  src,
  alt,
  className = "",
  priority = false,
  fade = [],
}: CoverImageProps) {
  const maskStyle: CSSProperties | undefined =
    fade.length > 0
      ? {
          maskImage: fade.map((edge) => FADE_GRADIENTS[edge]).join(", "),
          WebkitMaskImage: fade.map((edge) => FADE_GRADIENTS[edge]).join(", "),
          maskComposite: fade.length > 1 ? "intersect" : undefined,
          WebkitMaskComposite: fade.length > 1 ? "source-in" : undefined,
        }
      : undefined;

  return (
    <div className={`relative overflow-hidden ${className}`} style={maskStyle}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
