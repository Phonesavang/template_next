"use client";
import "~/styles/globals.css";
import { ConfigMui } from "./config_mui";
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
        <link rel="icon" type="image/x-icon" href="/logo-fo.png" />
        <title>MTS Exporter</title>
      </head>
      <body>
        <ConfigMui>{children}</ConfigMui>
      </body>
    </html>
  );
}
