import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revenue Ascent - Sales Consulting for B2B CEOs",
  description: "Transform your sales organization with strategic consulting designed exclusively for B2B CEOs. Drive revenue growth, optimize sales processes, and scale with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
