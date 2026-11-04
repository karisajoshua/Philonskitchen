import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Philon’s Kitchen | Love at First Bite", description: "Premium Kenyan catering, meal preparation, cooking classes, breakfast, snacks and custom cakes. Experience love at first bite.", openGraph: { title: "Philon’s Kitchen", description: "Love at First Bite" } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
