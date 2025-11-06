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
      className={cn("mx-auto w-full px-4 sm:px-[20px] lg:px-[80px]", className)}
      {...props} 
    >
      {children}
    </Tag>
  );
}
