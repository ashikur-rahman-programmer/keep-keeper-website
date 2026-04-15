import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper — Keep Your Friendships Alive",
  description:
    "KeenKeeper is a simple web application that helps users stay connected with their friends by tracking interactions and important dates. Users can add friends, record last contact dates, and get reminders when it’s time to reconnect. Built with Next.js and using localStorage, it provides a lightweight and user-friendly way to maintain meaningful relationships.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
