import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins} from 'next/font/google'
import { Anton} from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: '400', subsets: ['latin']  })
const anton = Anton({ weight: '400', subsets: ['latin']  })

export const metadata: Metadata = {
  title: "FogCandy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
