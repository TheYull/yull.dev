import Link from "next/link";
import { NAV, LINK_FOUR } from "./NavLinks";
import LinkFour from "./LinkFour";

export default function MainNav({ className = "" }) {
    return (
    <nav
      aria-label="Main"
        className={`flex items-center justify-evenly w-[550px] ${className}`}
      >
        
      {NAV.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="no-underline
          font-normal 
          text-[18px] 
          leading-[150%] 
          text-[var(--color-scheme-2-text)] 
          transition-transform duration-200 
          hover:scale-105
          active:text-[var(--color-blue-lighter)]"
        >
          {item.label}
        </Link>
      ))}

      <LinkFour href={LINK_FOUR.href} />
    </nav>
  );
}
