import React from "react";

export default function RightArrowIcon({
  width = 13,
  height = 14,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.3726 1.90702L11.3726 11.4994M11.3726 1.90702L1.78024 1.90702M11.3726 1.90702L1.25519 12.0244"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
