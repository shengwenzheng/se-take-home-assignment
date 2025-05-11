import type { Metadata } from "next";
import Header from "@/components/Header";
import "@/globals.css";

export const metadata: Metadata = {
  title: "Feedme",
  description: "Feedme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className="max-w-[1280px] mx-auto items-center">
        <div className="mb-[20px]">
          <Header/>
        </div>
        {children}
      </div>
      </body>
    </html>
  );
}
