"use client";
import React from "react";
import ThemeProvider from "./theme";
import { AuthProvider } from "./auth";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {/* <AuthProvider> */}

        {children}

        {/* </AuthProvider> */}
      </ThemeProvider>
    </>
  );
}
