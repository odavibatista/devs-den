import type { Metadata } from "next";
import JobsScreen from "./page";

export const metadata: Metadata = {
  title: "Dev's Den - Vagas",
  description: "Encontre a vaga que mais combina com as suas habilidades.",
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