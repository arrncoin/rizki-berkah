// components/ReelProductCard.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import WhatsAppButton from "./WhatsAppButton";

// Tambahkan prop priority untuk optimasi gambar pertama
export default function ReelProductCard({ product, priority = false }: { product: Product, priority?: boolean }) {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const currentMedia = product.media[index];
  const isVideo = currentMedia.endsWith(".mp4") || currentMedia.endsWith(".webm");

  const next = () => setIndex((i) => (i + 1) % product.media.length);
  const prev = () => setIndex((i) => (i - 1 + product.media.length) % product.media.length);

  // --- Gesture Logic (Swipe) ---
  const handleStart = (x: number) => { startX.current = x; };
  const handleEnd = (x: number) => {
    if (startX.current === null) return;
    const diff = startX.current - x;
    if (diff > 50) next();
    else if (diff < -50) prev();
    startX.current = null;
  };

  return (
    <div
      className="relative w-full h-full bg-neutral-950 text-white overflow-hidden select-none"
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
    >
      {/* === MEDIA LAYER === */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black">
        {isVideo ? (
          <video
            src={currentMedia}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover pointer-events-none"
          />
        ) : (
          <Image
            src={currentMedia}
            alt={`${product.name} ${index + 1}`}
            fill
            priority={priority}
            className="object-cover pointer-events-none"
            sizes="100vw"
          />
        )}
      </div>

      {/* === PROFESSIONAL GRADIENT OVERLAY === */}
      {/* Gradien lebih kuat di bawah untuk area teks */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/95 pointer-events-none" />

      {/* === TAP NAVIGATION ZONES (Desktop Only) === */}
      <div className="absolute inset-0 hidden md:flex z-10">
          <div onClick={prev} className="w-1/3 h-full cursor-w-resize group"><div className="h-full w-full group-hover:bg-white/5 transition-colors"/></div>
          <div className="w-1/3 h-full" /> {/* Dead zone di tengah */}
          <div onClick={next} className="w-1/3 h-full cursor-e-resize group"><div className="h-full w-full group-hover:bg-white/5 transition-colors"/></div>
      </div>

      {/* === UI CONTENT LAYER === */}
      <div className="absolute bottom-0 left-0 w-full p-5 md:p-8 z-30 flex flex-col justify-end pb-20 md:pb-16 pointer-events-none">
        {/* Container teks bisa menerima pointer events */}
        <div className="pointer-events-auto max-w-2xl">
           
           {/* MEDIA INDICATORS (Posisi di atas judul) */}
           {product.media.length > 1 && (
            <div className="flex gap-1.5 mb-4">
                {product.media.map((_, i) => (
                <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 backdrop-blur-sm ${
                    i === index ? "bg-white w-8" : "bg-white/40 w-4"
                    }`}
                />
                ))}
            </div>
            )}

          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-shadow-sm drop-shadow-lg">{product.name}</h2>
          <p className="text-xl font-semibold text-green-400 mb-2 drop-shadow">{product.price}</p>
          <p className="text-gray-200 text-base md:text-lg leading-snug line-clamp-3 md:line-clamp-none mb-5 opacity-90">
            {product.description}
          </p>

          {/* Tombol WA dengan lebar penuh di mobile */}
          <div className="w-full md:w-auto">
            <WhatsAppButton message={product.message} />
          </div>
        </div>
      </div>
    </div>
  );
}