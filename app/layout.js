import "@/styles/globals.css";
import siteMetadata from "@/seo/siteMetadata";
import { Inter, Unbounded } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-family" });
const unbounded = Unbounded({ subsets: ["latin"], variable: "--second-family", weight: ["400", "600", "700"] });

export const metadata = siteMetadata;

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${unbounded.variable}`}>
      <body className="min-h-screen bg-inherit overflow-x-clip antialiased">
        {children}
      </body>
    </html>
  );
}