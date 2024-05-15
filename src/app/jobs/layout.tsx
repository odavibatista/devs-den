import type { Metadata } from "next";
import JobsScreen from "./page";


export const metadata: Metadata = {
  title: "Dev's Den - Vagas",
  description: "Navegue por vagas de empresas que buscam seus talentos.."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <JobsScreen />
    </>
  );
}
