import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Provider from "@/app/context/providerWrapper";
import "./globals.css";
import { Toaster } from "sonner";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BookShare",
  description: "A web app to download and donate life changing books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} max-w-[1280px]`}>
        <Provider>
          {typeof window !== undefined && (
            <span className="block">
              {children}

              <Toaster />
            </span>
          )}
        </Provider>
      </body>
    </html>
  );
}
