import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vidit Jain — Software Engineer",
  description:
    "Portfolio of Vidit Jain, CS student at UC Irvine and new grad software engineer specializing in AI, backend systems, and full-stack development.",
  keywords: ["Vidit Jain", "Software Engineer", "UC Irvine", "Portfolio", "AI", "Full Stack"],
  openGraph: {
    title: "Vidit Jain — Software Engineer",
    description: "CS student at UC Irvine. Building at the intersection of AI, backend systems, and full-stack products.",
    type: "website",
  },
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
