import type { Metadata } from "next";
import { DM_Sans, Oi, Space_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const oi = Oi({
  variable: "--font-oi",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Restro-Mate | Restaurant & Inventory Management",
  description: "Restro-Mate: The all-in-one solution for restaurants. Billing, order, inventory, purchase, analytics, and PDF creation.",
  icons: {
    icon: "/assets/icons/restro.svg",
    shortcut: "/assets/icons/restro.svg",
    apple: "/assets/icons/restro.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/icons/restro.svg" />
      </head>
      <body
        className={`${syne.variable} ${spaceMono.variable} ${dmSans.variable} ${oi.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
