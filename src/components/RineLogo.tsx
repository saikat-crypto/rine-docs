import React from 'react';

interface RineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  framed?: boolean;
  color?: string;
}

export default function RineLogo({
  className = 'w-6 h-6',
  color = 'currentColor',
  size,
  framed = false,
  ...props
}: RineLogoProps) {
  const style = size ? { width: size, height: size } : {};

  if (framed) {
    return (
      <svg
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
        aria-label="Rine Logo"
        {...props}
      >
        <rect width="1000" height="1000" rx="200" fill="#0A0B0E" stroke="rgba(255,255,255,0.12)" strokeWidth="8" />
        <g fill={color}>
          {/* Top-Left Inverted L Block */}
          <path d="M 310 300 H 556 V 411 H 433 V 530 H 310 Z" />
          {/* Right Sweeping R-Bowl & Diagonal Leg */}
          <path d="M 559 414 H 682 V 484 C 682 553 638 607 570 607 L 656 700 H 514 L 436 607 V 534 C 504 534 559 511 559 484 Z" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="310 300 372 400"
      width={size || 20}
      height={size || 20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-label="Rine Logo"
      {...props}
    >
      <g fill={color}>
        <path d="M 310 300 H 556 V 411 H 433 V 530 H 310 Z" />
        <path d="M 559 414 H 682 V 484 C 682 553 638 607 570 607 L 656 700 H 514 L 436 607 V 534 C 504 534 559 511 559 484 Z" />
      </g>
    </svg>
  );
}
