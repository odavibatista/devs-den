'use client'

import { useHome } from "@/providers/home-data-provider";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

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
