import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

// Configuración de la fuente Plus Jakarta Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
});

export const metadata: Metadata = {
  title: "Portal Inmobiliario - Encuentra tu Hogar Ideal",
  description: "Busca y encuentra propiedades en venta y arriendo. Casas, departamentos y más en nuestro portal inmobiliario.",
  keywords: "inmobiliaria, propiedades, venta, arriendo, casas, departamentos, portal inmobiliario",
  authors: [{ name: "AgustinNRios" }],
  creator: "AgustinNRios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${plusJakartaSans.variable} antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
