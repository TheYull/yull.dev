"use client";

function cn(...args) {
  return args.filter(Boolean).join(" ");
}

export function Container({
  as: Tag = "div",
  className = "",
    children,
    ...props
}) {
  return (
    <Tag
      className={cn("w-full max-w-[1200px] mx-auto", className)}
      {...props} 
    >
      {children}
    </Tag>
  );
}
