import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Elite Tree And Snow LLC",
    template: "%s | Elite Tree And Snow LLC",
  },
  description: "",
  openGraph: {
    title: "Elite Tree And Snow LLC",
    description:
      "Elite Tree And Snow LLC is a professional crew of dedicated individual that will work hard to give you the best service possible.",
    url: "https://atp-exphys.com", //Please Change this url
    siteName: "ATP Exphys",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
