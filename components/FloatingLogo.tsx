// components/FloatingLogo.tsx
import Image from "next/image";
import Link from "next/link";

export default function FloatingLogo() {
  return (
    <div className="fixed top-0 left-0 z-50 p-4 w-full bg-linear-to-b from-black/60 to-transparent pointer-events-none">
      <Link href="/" className="pointer-events-auto inline-block">
       {/* Ganti src dengan path logo Anda yang benar */}
       {/* Pastikan menggunakan file .svg atau .png yang transparan */}
        <Image
          src="/rb-logo.svg" 
          alt="Rizki Berkah Logo"
          width={180}
          height={40}
          className="w-35 md:w-45 h-auto drop-shadow-lg"
          priority
        />
      </Link>
    </div>
  );
}