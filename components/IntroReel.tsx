// components/IntroReel.tsx
"use client";

import { FaChevronDown } from "react-icons/fa";

export default function IntroReel() {
  return (
    <div className="relative w-full h-full bg-neutral-900 text-white overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          // Tambahkan poster image agar tidak blank saat loading
          poster="/images/hero-poster.jpg" 
        >
          {/* Pastikan path video benar */}
          <source src="/videos/folding-gate1.mp4" type="video/mp4" />
        </video>
        {/* Overlay Gradien Gelap agar teks terbaca */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/40" />
      </div>

      {/* KONTEN TEKS (Di posisi bawah ala Reels) */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20 flex flex-col items-start justify-end h-full pb-24 md:pb-20">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-xl leading-tight">
            Ahlinya <span className="text-green-500">Folding Gate</span> & Pintu Besi.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl drop-shadow-md mb-6 leading-relaxed font-medium">
            Kualitas material terbaik, pengerjaan rapi, dan hasil yang kokoh untuk keamanan properti Anda.
          </p>
        </div>
      </div>
        
      {/* Indikator Scroll (Opsional, untuk memberi tahu user bisa scroll) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/70">
          <FaChevronDown size={24} />
      </div>
    </div>
  );
}