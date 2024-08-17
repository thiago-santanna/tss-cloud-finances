import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TSS Cloud Finances",
  description: "Acompanhe suas contas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body style={{ backgroundColor: "#e5e5e5" }} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
