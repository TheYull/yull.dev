import Link from "next/link";
import { useTranslations } from "next-intl";
import { NAV, LINK_FOUR } from "./NavLinks";
import { LinkFour } from "./LinkFour/LinkFour";

export function MainNav({ className = "", locale, othersMenuProps }) {
  const t = useTranslations("header");
  const othersProps = othersMenuProps || {};

    return (
    <nav
      aria-label="Main"
        className={`items-center justify-evenly lg:w-[550px] ${className}`}
      >
        
      {NAV.map((item) => (
        <Link
          key={item.key}
          href={`/${locale}${item.href}`}
          className="no-underline
          font-normal 
          text-[18px] 
          leading-[150%] 
          text-[var(--color-scheme-2-text)] 
          transition-transform duration-200 
          hover:scale-105
          active:text-[var(--color-blue-lighter)]"
        >
          {t(`nav.${item.key}`)}
        </Link>
      ))}

        <LinkFour
          href={`/${locale}${LINK_FOUR.href}`}
          label={t(`nav.${LINK_FOUR.key}`)}
          {...othersProps}
        />
    </nav>
  );
}
