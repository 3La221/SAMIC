import type { Metadata } from "next";

import "./globals.css";
import { Saira  } from 'next/font/google'


const saira = Saira({
  weight:['300'],
  subsets: ['latin']
})
export const metadata: Metadata = {
  title: "SAMIC",
  description: "SAMIC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${saira.className}`}
      >
        {children}
      </body>
    </html>
  );
}
