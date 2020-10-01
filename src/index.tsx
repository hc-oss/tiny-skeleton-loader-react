import React from "react";

import css from "./styles.css";

interface SkeletonLoaderProps {
  width?;
  height?;
  background?;
  radius?;
  circle?: boolean;
  block?: boolean;
  style?: React.CSSProperties;
}

function SkeletonLoader({
  width = "100%",
  height = "1em",
  background = "#E9ECEF",
  radius = "4px",
  circle = false,
  block = true,
  style = {},
}: SkeletonLoaderProps) {
  return (
    <div
      className={css.skeleton}
      style={{
        width,
        height,
        background,
        borderRadius: circle ? "50%" : radius,
        display: block ? "block" : "inline-block",
        ...style,
      }}
    >
      &zwnj;
    </div>
  );
}

export default SkeletonLoader;
