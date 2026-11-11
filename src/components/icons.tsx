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
export const UserIcon = ({ className = "h-[18px] w-[18px]" }: IconProps) => (
  <svg {...base} className={className}><circle cx="12" cy="8.5" r="3.5" /><path d="M5 20c1.2-3.6 3.8-5.5 7-5.5s5.8 1.9 7 5.5" /></svg>
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

/** The VÄNTÉ figure emblem, traced from the garment artwork. */
export const EmblemIcon = ({ className = "h-6 w-auto" }: IconProps) => (
  <svg viewBox="0 0 446 801" fill="currentColor" aria-hidden className={className}>
    <path fillRule="evenodd" d="M182 796C189 793 197 787 208 775C224 758 224 758 226 718C229 683 230 677 234 664C237 654 238 649 239 641C240 623 243 620 261 610C282 599 284 594 277 575C270 559 268 551 267 532C266 523 266 512 265 508C265 503 264 493 263 484C263 475 262 459 261 448C259 415 261 373 265 363C268 355 270 356 291 370C309 382 312 383 319 383C328 383 331 381 346 362C370 331 378 319 407 263C412 252 420 240 423 236C436 218 443 205 441 199C439 192 436 190 414 183C382 173 371 176 362 196C358 205 356 208 343 225C338 232 331 240 329 244C321 256 317 259 310 259C303 259 295 250 281 227C277 221 273 215 268 210C253 196 253 194 268 175C284 153 293 126 293 98C292 82 293 80 303 66C312 54 312 51 305 35C298 21 296 18 289 19C282 19 274 24 268 33C258 47 249 52 243 46C240 43 238 38 237 25C236 15 235 11 231 7C226 3 218 3 208 8C193 15 190 20 192 35C196 65 189 85 175 81C170 80 166 75 158 60C151 47 149 44 144 41C135 36 124 41 118 54C114 64 115 69 125 82C136 98 139 108 133 114C128 120 120 120 109 114C97 108 94 107 90 107C82 107 76 112 76 119C76 126 79 130 87 136C117 158 140 179 143 186C149 197 145 203 129 206C112 210 100 215 85 225C74 232 69 236 47 257C19 284 19 284 16 314C16 325 15 339 14 344C14 348 13 358 12 365C12 378 10 386 6 398C2 413 4 423 12 427C19 430 50 427 59 423C68 418 71 410 73 388C76 349 76 348 79 340C84 325 90 316 93 318C98 322 99 339 99 386C100 444 99 443 120 484C136 516 144 536 144 542C144 553 137 558 103 575C62 595 54 598 40 601C28 603 21 608 19 615C17 621 19 626 28 644C32 653 37 664 39 669C44 682 48 687 56 688C61 688 62 688 72 683C87 675 124 659 130 658C147 655 151 663 144 690C141 702 141 703 141 724C140 742 140 746 138 756C136 767 136 767 138 772C141 777 157 792 163 795C167 797 176 797 182 796ZM200 161C191 157 184 143 185 134C187 123 202 113 216 113C230 113 242 126 239 138C238 143 231 153 227 157C219 163 208 165 200 161Z" />
  </svg>
);
