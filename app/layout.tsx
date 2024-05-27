import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Providers from "@/providers";
import { Toaster } from "@/components/ui/sonner";
import { app } from "@/constants";
import DesktopSidebar from "@/components/layout/sidebar/desktop";

const font = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: app.name,
    template: "%s | " + app.name,
  },
  description: app.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={font.className + " h-[calc(100vh-65px)] overflow-hidden"}
      >
        <Providers>
          <Header />

          <Toaster position="top-center" duration={7000} closeButton />
          <div className="flex h-full overflow-hidden ">
            <DesktopSidebar />

            <main className="w-full overflow-auto h-full ">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
