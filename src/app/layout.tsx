import type { Metadata } from "next";
import "./globals.scss";


export const metadata: Metadata = {
  title: "Dev's Den",
  description: "O melhor site para aplicar para vagas de emprego de TI."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="body">{children}</body>
    </html>
  );
}
