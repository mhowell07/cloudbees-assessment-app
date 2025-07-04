import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matt Howell - CloudBees Assessment App",
  description: "Made by Matt Howell using create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex items-center vsc-initialized"
      >
        {children}
      </body>
    </html>
  );
}
