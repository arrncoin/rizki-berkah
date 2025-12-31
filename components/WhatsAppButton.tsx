// components/WhatsAppButton.tsx
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton({ message }: { message: string }) {
  // PASTIKAN NOMOR INI BENAR, gunakan kode negara (62) tanpa tanda '+'
  const phone = "6282334962196"; 
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      // Styling tombol yang lebih modern: full width di mobile, ada efek hover, dan bayangan
      className="
        group
        flex items-center justify-center gap-3 
        bg-green-600 hover:bg-green-500 
        text-white text-lg font-bold
        py-3.5 px-6 
        rounded-full 
        w-full md:w-auto
        transition-all duration-300
        shadow-lg hover:shadow-green-500/30
        active:scale-95
      "
    >
      <FaWhatsapp className="text-2xl group-hover:rotate-12 transition-transform" />
      <span>Hubungi Sekarang</span>
    </a>
  );
}