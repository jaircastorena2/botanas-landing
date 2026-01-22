import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Botanas Blofis | Snacks Saludables Premium",
  description: "Descubre los snacks más saludables y deliciosos. Maicitos inflados, obleas de amaranto, chips de vegetales. Libres de azúcar, sin grasas trans.",
  keywords: "snacks saludables, maicitos, obleas amaranto, chips vegetales, botanas premium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
        <CartDrawer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

