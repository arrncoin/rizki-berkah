// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rizki Berkah Folding Gate | Spesialis Pintu Besi & Rolling Door",
  description:
    "Jasa pembuatan dan pemasangan Folding Gate, Pintu Besi, dan Rolling Door berkualitas. Harga bersahabat, pengerjaan rapi & bergaransi.",
  keywords: ["folding gate", "rolling door", "pintu besi", "bengkel las", "rizki berkah"],
  openGraph: {
    title: "Rizki Berkah Folding Gate",
    description: "Solusi pintu besi dan keamanan bangunan Anda.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}