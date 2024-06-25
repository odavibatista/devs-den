import type { Metadata } from "next";
import "./globals.scss";
import "./styles.scss";
import Header from "@/presentation/components/header";
import Footer from "@/presentation/components/footer";
import { HomeProvider } from "@/providers/home-data-provider";

export const metadata: Metadata = {
  title: "Dev's Den",
  description: "O melhor site para aplicar para vagas de emprego de TI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="body">
        <HomeProvider>
          <Header />
          {children}
          <Footer />
        </HomeProvider>
      </body>
    </html>
  );
}
