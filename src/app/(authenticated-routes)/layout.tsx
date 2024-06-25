"use client";

import { useHome } from "@/providers/home-data-provider";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { homeData } = useHome();

  const router = useRouter();

  useLayoutEffect(() => {
    (async () => {
      if (!homeData) {
        router.push("/");
      }
    })();
  }, [homeData]);

  return <>{children}</>;
}
