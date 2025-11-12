const siteMetadata = {
  title: "YULL.DEV — Frontend Developer Portfolio",
  description:
    "Personal portfolio of a frontend developer showcasing React, Next.js, Redux, Tailwind, and animation skills.",
  keywords: [
    "frontend developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Redux Toolkit",
    "Yull.dev"
  ],
  authors: [{ name: "Yull" }],
  openGraph: {
    title: "Yull.dev — Frontend Developer Portfolio",
    description:
      "Explore the modern web developer portfolio built with Next.js and Tailwind CSS.",
    url: "https://yull.netlify.app/",
    siteName: "Yull.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1440,
        height: 900,
        alt: "Yull.dev preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", sizes: "any" },
      { url: "/favicon/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon/icon-512.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  },
  manifest: "/favicon/site.webmanifest"
};

export default siteMetadata;
