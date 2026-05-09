import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: "Abdullo | Frontend Developer",
  description:
    "Creative frontend developer crafting beautiful, interactive web experiences with modern technologies.",
  keywords: [
    "frontend developer",
    "web developer",
    "react",
    "next.js",
    "portfolio",
  ],
  authors: [{ name: "Alex Chen" }],
  openGraph: {
    title: "Alex Chen | Frontend Developer",
    description:
      "Creative frontend developer crafting beautiful, interactive web experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <SmoothScrollProvider>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
