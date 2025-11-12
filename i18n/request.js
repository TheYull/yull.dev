import {getRequestConfig} from "next-intl/server";

export default getRequestConfig(async ({requestLocale}) => {
  const resolved = await Promise.resolve(requestLocale);
  const locale = typeof resolved === "string" ? resolved : "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});