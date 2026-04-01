"use client";

import { useState, useEffect } from "react";
import { prepare, layout } from "@chenglou/pretext";

interface PretextFillTextProps {
  text: string;
  fontFamily?: string;
  fontWeight?: number;
  containerWidth: number;
  maxFontSize?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function PretextFillText({
  text,
  fontFamily = "Outfit",
  fontWeight = 900,
  containerWidth,
  maxFontSize = 600,
  className = "",
  style,
}: PretextFillTextProps) {
  const [fontSize, setFontSize] = useState<number | null>(null);

  useEffect(() => {
    if (!containerWidth || containerWidth <= 0) return;

    let cancelled = false;

    (async () => {
      await document.fonts.ready;
      if (cancelled) return;

      // Binary search: find largest font size where text still fits in one line
      let lo = 8;
      let hi = maxFontSize;

      while (hi - lo > 0.5) {
        const mid = (lo + hi) / 2;
        const fontStr = `${fontWeight} ${mid}px "${fontFamily}"`;
        const handle = prepare(text, fontStr);
        // Large lineHeight so wrapping only occurs due to width constraint
        const { lineCount } = layout(handle, containerWidth, mid * 2);
        if (lineCount <= 1) lo = mid;
        else hi = mid;
      }

      if (!cancelled) setFontSize(Math.floor(lo));
    })();

    return () => {
      cancelled = true;
    };
  }, [text, fontFamily, fontWeight, containerWidth, maxFontSize]);

  if (fontSize === null) {
    // Invisible placeholder preserves layout during calculation
    return (
      <span
        className={`invisible block leading-none whitespace-nowrap ${className}`}
        style={{ fontSize: "10px", ...style }}
      >
        {text}
      </span>
    );
  }

  return (
    <span
      className={`block leading-none whitespace-nowrap ${className}`}
      style={{ fontSize: `${fontSize}px`, ...style }}
    >
      {text}
    </span>
  );
}
