// app/page.tsx
import type { Metadata } from "next";
import { products } from "@/data/products";
import IntroReel from "@/components/IntroReel";
import ReelProductCard from "@/components/ReelProductCard";
import ServicesReel from "@/components/ServicesReel";
import FloatingLogo from "@/components/FloatingLogo";

export const metadata: Metadata = {
  title: "Rizki Berkah Folding Gate | Spesialis Pintu Besi",
  description: "Jasa pembuatan dan pemasangan Folding Gate, Pintu Besi, dan Rolling Door berkualitas dengan tampilan video detail.",
};

export default function Home() {
  return (
    // Container Utama: Mengatur tinggi 100vh dan snap scrolling
    <main className="fixed inset-0 w-full h-full bg-black overflow-y-scroll snap-y snap-mandatory scrollbar-hide z-0">
      
      {/* Logo yang selalu mengambang di kiri atas */}
      <FloatingLogo />

      {/* === REEL 1: INTRO / HERO === */}
      <section className="w-full h-full snap-start relative">
        <IntroReel />
      </section>

      {/* === REEL 2 s/d N: PRODUK === */}
      {products.map((product, index) => (
        // Menambahkan 'priority' pada produk pertama setelah intro agar loading lebih cepat
        <section key={product.id} className="w-full h-full snap-start relative">
           <ReelProductCard product={product} priority={index === 0} />
        </section>
      ))}

      {/* === REEL TERAKHIR: SERVIS / INFO === */}
      <section className="w-full h-full snap-start relative">
        <ServicesReel />
      </section>

    </main>
  );
}