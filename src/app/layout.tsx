"use client";
import React from "react";
import { CssBaseline } from "@mui/material";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { exporterTheme } from "@/theme/index";
import dynamic from "next/dynamic";
const ClientOnly = dynamic(() => import("@/components/client-wrapper"), {
  ssr: false,
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/next.svg" />
        <title>template</title>
      </head>
      <body>
        <ClientOnly>
          <CssBaseline />
          <ThemeProvider theme={exporterTheme}>{children}</ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
