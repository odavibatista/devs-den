'use client'

import { useHome } from "@/providers/home-data-provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const { homeData, isHomeDataLoading } = useHome();

    const router = useRouter()
    
    useEffect(() => {
      (async () => {
        if (!homeData && !isHomeDataLoading) {
            router.push("/")
        }
      })()
    })


  return (
    <>
        {children}
    </>
  );
}
