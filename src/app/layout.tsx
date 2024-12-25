import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "Co-Sketch",
  description: "",
};

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` p-2 bg-primary text-ptext ${roboto.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}