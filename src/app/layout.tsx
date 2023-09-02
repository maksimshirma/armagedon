"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import Zemlia from "@/components/zemlia/zemlia";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Armagedon",
    description:
        "онлайн-сервис по мониторингу и уничтожению опасных астероидов",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className="header">
                    <Header />
                </header>
                <main className="main">{children}</main>
                <Zemlia />
            </body>
        </html>
    );
}
