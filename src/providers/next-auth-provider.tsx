'use client'

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export function NextAuthSessionProvider({children}: {children: ReactNode}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}