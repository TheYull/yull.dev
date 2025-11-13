import createMiddleware from "next-intl/middleware";
// import {locales, defaultLocale} from "./lib/i18n";

export default createMiddleware({
  locales: ["en", "uk" ],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/(en|uk)/:path*"],
};