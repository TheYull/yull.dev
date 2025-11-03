import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
    >
      <img src="/logo.svg" alt="Logo" className="block h-[17px] transition-transform duration-200 active:hover:scale-105" />
    </Link>
  );
}
