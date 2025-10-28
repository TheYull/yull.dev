import "./globals.css";

export const metadata = {
  title: "YULL.DEV — Frontend Developer Portfolio",
  description: 'Personal portfolio of a frontend developer showcasing React, Next.js, Redux, Tailwind, and animation skills.',
  keywords: ['frontend developer','React','Next.js','Tailwind CSS','Redux Toolkit','Yull.dev'],
  authors: [{ name: 'Yull' }],
  openGraph: {
    title: 'Yull.dev — Frontend Developer Portfolio',
    description: 'Explore the modern web developer portfolio built with Next.js and Tailwind CSS.',
    url: 'https://yull.dev',
    siteName: 'Yull.dev',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Yull.dev preview' }],
    locale: 'en_US',
    type: 'website',
  },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}