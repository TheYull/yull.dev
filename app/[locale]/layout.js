import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { locales } from "@/lib/i18n";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer/Footer";


export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div data-locale={locale}>
        <Header locale={locale} />
        {children}
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}