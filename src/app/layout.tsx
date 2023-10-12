import "./globals.css";
import type { Metadata } from "next";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
