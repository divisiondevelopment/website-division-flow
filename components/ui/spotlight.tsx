import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        // Fixed vh/vw sizing instead of a %-based height: an absolutely
        // positioned element's height: % only resolves against a DEFINITE
        // ancestor height, and .hero-sec only sets min-height (indefinite),
        // so a %-height here can compute to 0 and render nothing at all.
        //
        // No "opacity-0" utility class here on purpose: Bootstrap (loaded
        // site-wide) ships its own `.opacity-0 { opacity: 0 !important; }`
        // utility under the same name. !important outranks CSS Animations
        // in the cascade, so it permanently pinned this element's opacity
        // to 0 even while the animation itself ran to completion (its
        // transform kept animating fine since there was no competing rule
        // for that property) — the glow never got a chance to render.
        // --animate-spotlight uses fill-mode "both" instead, so the 0%
        // keyframe (opacity: 0) covers the pre-animation delay without
        // needing a separate utility class.
        "animate-spotlight pointer-events-none absolute z-[1] h-[130vh] w-[55vw] min-w-[600px]",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "#6c33ff"}
          fillOpacity="0.22"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};
