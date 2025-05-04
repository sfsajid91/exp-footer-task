import React from "react";

export default function ListIcon({
  width = 15,
  height = 15,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.458984"
        y="0.861328"
        width="14"
        height="14"
        rx="3"
        fill="#37D153"
      />
      <path
        d="M9.8234 2.61133L4.83398 8.90741L7.60409 8.63157L5.80504 13.1113L10.959 6.81374L8.18709 7.08958L9.8234 2.61133Z"
        fill="#032007"
      />
    </svg>
  );
}
