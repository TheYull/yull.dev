"use client";

import React from "react";

function cn(...args) {
  return args.filter(Boolean).join(" ");
}

export default function Container({
  as: Tag = "div",
  className = "",
    children,
    ...props
}) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8", className)}
      {...props} 
    >
      {children}
    </Tag>
  );
}
