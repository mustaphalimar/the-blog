import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/header/Header";
import Providers from "@/providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Blog",
  description: "The Blog | Share you insightful ideas!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter`}>
        <Providers>
          <main className="container">
            <Header />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
