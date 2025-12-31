// components/FloatingLogo.tsx
import Image from "next/image";
import Link from "next/link";

export default function FloatingLogo() {
  return (
    <div className="fixed top-0 left-0 z-50 p-4 w-full bg-linear-to-b from-black/60 to-transparent pointer-events-none">
      <Link href="/" className="pointer-events-auto inline-block">
        <Image
          src="/rb-logo.svg" 
          alt="Rizki Berkah Logo"
          width={240}
          height={54}
          className="w-35 md:w-45 h-auto drop-shadow-lg"
          priority
        />
      </Link>
    </div>
  );
}