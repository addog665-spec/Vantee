type IconProps = { className?: string; filled?: boolean };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const MenuIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...base} className={className}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const CloseIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...base} className={className}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const SearchIcon = ({ className = "h-[18px] w-[18px]" }: IconProps) => (
  <svg {...base} className={className}><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.2-4.2" /></svg>
);
export const BagIcon = ({ className = "h-[18px] w-[18px]" }: IconProps) => (
  <svg {...base} className={className}><path d="M5 8h14l-1 12H6L5 8z" /><path d="M9 8V6a3 3 0 016 0v2" /></svg>
);
export const HeartIcon = ({ className = "h-[18px] w-[18px]", filled }: IconProps) => (
  <svg {...base} fill={filled ? "currentColor" : "none"} className={className}>
    <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />
  </svg>
);
export const ArrowIcon = ({ className = "h-3.5 w-3.5" }: IconProps) => (
  <svg {...base} className={className}><path d="M7 17L17 7M8 7h9v9" /></svg>
);
export const PlusIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg {...base} className={className}><path d="M12 5v14M5 12h14" /></svg>
);
export const MinusIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg {...base} className={className}><path d="M5 12h14" /></svg>
);
