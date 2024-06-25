import { useHome } from "@/providers/home-data-provider";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

export const metadata: Metadata = {
  title: "Dev's Den - Abrir Vaga",
  description: "Busque o talento desejado para a sua empresa."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { homeData, isHomeDataLoading } = useHome();

  const router = useRouter()

  useLayoutEffect(() => {
    if(homeData?.role !== 'company') {
      router.push("/")
    }
  })

  return (
    <>
        {children}
    </>
  );
}
