import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import './globals.css'

import '@fortawesome/fontawesome-svg-core/styles.css'; //prevents a Font Awesome icon server-side rendering bug,
import { config } from '@fortawesome/fontawesome-svg-core'; // Prevent fontawesome from adding its CSS since we did it manually above:
config.autoAddCss = false; // eslint-disable import/first https://stackoverflow.com/questions/56334381/why-my-font-awesome-icons-are-being-displayed-big-at-first-and-then-updated-to-t

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Cat Trail Capital | Official Website",
  description: "Cat Trail is a single family office (SFO), a private investment company focused on growing its General Partners' capital. Cat Trail takes strategic positions in publicly traded securities, makes placements with unique fund managers, manages a portfolio of real assets, and occasionally invests in small private companies. Investing in both debt and equity, Cat Trail establishes active, on-going relationships with those with whom it invests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
            {children}
        </body>
    </html>
  );
}
