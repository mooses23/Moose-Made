interface MooseLogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export function MooseSilhouette({ className = "", size = 40, color = "currentColor" }: MooseLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Moose silhouette"
    >
      {/*
        Front-facing moose head silhouette — iconic brand mark shape.
        Uses currentColor for main shape, with cutout details via masking.
        Features: wide palmate antlers, large rectangular snout (bell), 
        broad face. Bold and readable at any size.
      */}
      <defs>
        <mask id="moose-face-mask">
          <rect width="200" height="200" fill="white" />
          {/* Eye cutouts */}
          <ellipse cx="83" cy="88" rx="8" ry="9" fill="black" />
          <ellipse cx="117" cy="88" rx="8" ry="9" fill="black" />
          {/* Nostril cutouts */}
          <ellipse cx="91" cy="148" rx="5.5" ry="4" fill="black" />
          <ellipse cx="109" cy="148" rx="5.5" ry="4" fill="black" />
        </mask>
      </defs>

      <g fill={color} mask="url(#moose-face-mask)">
        {/* Left antler — broad palmate spread */}
        <path d="M 72 62 L 56 8 L 48 12 L 59 50 L 43 22 L 36 28 L 55 60 L 32 42 L 28 50 L 56 66 Z" />

        {/* Right antler — mirrored */}
        <path d="M 128 62 L 144 8 L 152 12 L 141 50 L 157 22 L 164 28 L 145 60 L 168 42 L 172 50 L 144 66 Z" />

        {/* Head */}
        <ellipse cx="100" cy="97" rx="46" ry="52" />

        {/* Extended muzzle / snout */}
        <rect x="79" y="122" width="42" height="36" rx="10" />

        {/* Dewlap / bell */}
        <ellipse cx="100" cy="166" rx="11" ry="16" />
      </g>
    </svg>
  );
}
