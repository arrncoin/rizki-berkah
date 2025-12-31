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

      {/* Kontainer Utama: justify-center untuk posisi tengah sempurna */}
      <div className="relative z-20 w-full max-w-4xl px-6 flex flex-col justify-center h-full max-h-[85vh]">
        
        {/* Header: Center tengah */}
        <header className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg">
            Kenapa Memilih Kami?
          </h2>
        </header>

        {/* Grid: Layout baris di mobile (hemat ruang), kolom di desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          <ServiceItem 
            icon={<FaShieldAlt className="text-green-400" size={28}/>}
            title="Material Premium" 
            desc="Plat besi tebal & rangka kokoh anti-karat."
          />
          <ServiceItem 
            icon={<FaRulerCombined className="text-green-400" size={28}/>}
            title="Presisi Custom" 
            desc="Diukur khusus menyesuaikan lokasi Anda."
          />
          <ServiceItem 
            icon={<FaHandshake className="text-green-400" size={28}/>}
            title="Bergaransi" 
            desc="Harga transparan dan pengerjaan rapi."
          />
        </div>

        {/* CTA: Box informasi akhir di tengah */}
        <div className="flex flex-col items-center gap-4 bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10 text-center shadow-xl">
            <p className="text-base md:text-xl font-medium opacity-90">Siap amankan properti Anda?</p>
            <a 
              href={waUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black hover:bg-gray-200 px-10 py-3.5 rounded-full text-lg font-bold transition active:scale-95 shadow-lg"
            >
                <FaPhoneAlt size={18} /> Konsultasi Gratis
            </a>
        </div>
      </div>
    </div>
  );
}

function ServiceItem({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    // Di mobile: Layout Row (Ikon di samping) agar tidak memakan banyak tempat vertikal
    <div className="bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl p-4 flex md:flex-col items-center md:items-center text-left md:text-center gap-4 md:gap-3 hover:bg-white/5 transition">
      <div className="shrink-0">{icon}</div>
      <div>
        <h3 className="font-bold text-lg md:text-xl text-white">{title}</h3>
        <p className="text-gray-400 text-xs md:text-sm leading-tight">{desc}</p>
      </div>
    </div>
  );
}