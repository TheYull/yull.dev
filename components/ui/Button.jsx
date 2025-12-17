"use client";
import Link from "next/link";

function cn(...a){return a.filter(Boolean).join(" ");}

export function UIButton({
  as: As = "button",
  href,
  type = "button",
  variant = "solid",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const base = "text-center font-medium p-[10px] rounded-full border-0 inline-flex items-center justify-center transition-transform duration-200 hover:scale-105";
  const sizes = { sm: "h-8 px-3 text-xs", md: "h-[35px] p-[20px] px-4 text-sm", lg: "h-[35px] p-[10px] px-5 text-sm" };
  const solid = "p-[22px] text-[var(--color-scheme-2-text)] bg-[var(--color-electric-violet)] active:bg-[var(--color-electric-violet-dark)]";
  const outline = "bg-transparent border-2 active:bg-[var(--color-neutral-dark)] ";
  // const transparent = "bg-transparent border-0 ";
  

  const cls = cn(base, sizes[size], variant === "solid" ? solid : outline, className);

  if (As === Link) return <Link href={href ?? "#"} className={cls} {...props}>{children}</Link>;
  if (As === "a")   return <a href={href ?? "#"} className={cls} {...props}>{children}</a>;
  return <button type={type} className={cls} {...props}>{children}</button>;
}
