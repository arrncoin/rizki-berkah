// components/ServicesReel.tsx
import { FaShieldAlt, FaRulerCombined, FaHandshake, FaPhoneAlt } from "react-icons/fa";

export default function ServicesReel() {
  const phone = "6282334962196";
  const waUrl = `https://wa.me/${phone}?text=Halo,%20saya%20mau%20konsultasi%20tentang%20Folding%20Gate.`;

  return (
    <div className="relative w-full h-full bg-neutral-900 text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/metal-pattern.png')] bg-cover opacity-10 grayscale"></div>
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-black/60" />

      {/* Kontainer Utama: Menggunakan max-h untuk mencegah konten meluap */}
      <div className="relative z-20 w-full max-w-4xl px-6 flex flex-col justify-center h-full max-h-[90%] py-4">
        
        {/* Header: Ukuran teks mengecil di layar sangat pendek */}
        <header className="mb-6 md:mb-10 text-center">
          <h2 className="text-2xl xs:text-3xl md:text-5xl font-bold text-white tracking-tight">
            Kenapa Memilih Kami?
          </h2>
        </header>

        {/* Grid: Di Mobile menggunakan tampilan baris tipis agar hemat ruang */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12 overflow-y-auto scrollbar-hide">
          <ServiceItem 
            icon={<FaShieldAlt className="text-green-400" size={24}/>}
            title="Material Premium" 
            desc="Plat besi tebal & rangka kokoh anti-karat."
          />
          <ServiceItem 
            icon={<FaRulerCombined className="text-green-400" size={24}/>}
            title="Presisi Custom" 
            desc="Diukur khusus menyesuaikan lokasi Anda."
          />
          <ServiceItem 
            icon={<FaHandshake className="text-green-400" size={24}/>}
            title="Bergaransi" 
            desc="Harga transparan dan pengerjaan rapi."
          />
        </div>

        {/* CTA: Dibuat lebih ringkas di mobile */}
        <div className="mt-auto md:mt-0 flex flex-col items-center gap-3 bg-white/10 p-4 md:p-6 rounded-2xl backdrop-blur-md border border-white/10 text-center">
            <p className="text-sm md:text-lg font-medium opacity-90">Siap amankan properti Anda?</p>
            <a 
              href={waUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-6 py-2.5 md:px-8 md:py-3 rounded-full text-base md:text-lg font-bold transition active:scale-95 shadow-md"
            >
                <FaPhoneAlt size={16} /> Konsultasi Gratis
            </a>
        </div>
      </div>
    </div>
  );
}

function ServiceItem({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    // Di mobile: Flex horizontal (row) untuk menghemat ruang vertikal
    // Di desktop: Kembali ke tumpukan vertikal
    <div className="bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl p-3 md:p-5 flex md:flex-col items-center md:items-start gap-4 md:gap-0 hover:bg-white/5 transition">
      <div className="md:mb-3 shrink-0">{icon}</div>
      <div>
        <h3 className="font-bold text-base md:text-xl text-white">{title}</h3>
        <p className="text-gray-400 text-xs md:text-sm leading-tight md:leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}