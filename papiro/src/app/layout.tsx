import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Papiro",
  description: "Crie seu blog pessoal com facilidade e compartilhe suas ideias com o mundo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <body>{children}</body>
        <Footer />
      </body>
    </html>
  );
}
