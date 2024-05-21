import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev's Den - Abrir Vaga",
  description: "Busque o talento desejado para a sua empresa."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
        {children}
    </>
  );
}
