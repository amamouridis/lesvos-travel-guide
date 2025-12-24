import "./globals.css";
import NavBar from "../components/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Lesvos Travel Guide",
    template: "%s | Lesvos Travel Guide",
  },
  description:
    "Discover Lesvos like a local. Villages, beaches, nature and authentic local food — a curated travel guide for the island.",
  keywords: [
    "Lesvos",
    "Lesvos travel guide",
    "Lesvos villages",
    "Lesvos beaches",
    "Lesvos food",
    "Lesvos nature",
    "Greece travel",
  ],
  authors: [{ name: "Angelos Mamouridis" }],
  creator: "Angelos Mamouridis",
  openGraph: {
    title: "Lesvos Travel Guide",
    description:
      "Explore villages, beaches, nature and authentic local food in Lesvos — no tourist traps.",
    url: "https://lesvos-travel-guide.vercel.app",
    siteName: "Lesvos Travel Guide",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lesvos Travel Guide",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lesvos Travel Guide",
    description:
      "Discover Lesvos like a local — villages, beaches & authentic food.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://lesvos-travel-guide.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-100 text-neutral-900 antialiased">
        {/* Global Navigation */}
        <NavBar />

        {/* Main content */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
