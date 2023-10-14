import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piotr Błażejak - Software Developer portfolio",
  description: "Fullstack developer portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={
          (montserrat.className,
          "bg-gradient-to-tl from-light-navy to-navy relative")
        }
      >
        {children}
      </body>
    </html>
  );
}
