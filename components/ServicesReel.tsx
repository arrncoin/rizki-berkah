// components/ServicesReel.tsx
import { FaShieldAlt, FaRulerCombined, FaHandshake, FaPhoneAlt } from "react-icons/fa";

export default function ServicesReel() {
  const phone = "6282334962196"; // Ganti nomor
  const waUrl = `https://wa.me/${phone}?text=Halo,%20saya%20mau%20konsultasi%20tentang%20Folding%20Gate.`;

  return (
    <div className="relative w-full h-full bg-neutral-900 text-white overflow-hidden flex items-center justify-center">
      {/* Background Image/Pattern yang halus */}
       <div className="absolute inset-0 bg-[url('/images/metal-pattern.png')] bg-cover opacity-10 grayscale"></div>
       <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-black/60" />

      <div className="relative z-20 px-6 md:px-10 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight">
          Kenapa Memilih Kami?
        </h2>

        {/* Grid layanan diubah menjadi tampilan yang lebih kompak untuk satu layar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
          <ServiceItem 
            icon={<FaShieldAlt className="text-green-400" size={32}/>}
            title="Material Premium" 
            desc="Plat besi tebal & rangka kokoh anti-karat untuk keamanan jangka panjang."
          />
          <ServiceItem 
            icon={<FaRulerCombined className="text-green-400" size={32}/>}
            title="Presisi Custom" 
            desc="Setiap unit diukur dan dibuat khusus menyesuaikan lokasi Anda."
          />
          <ServiceItem 
            icon={<FaHandshake className="text-green-400" size={32}/>}
            title="Terpercaya & Bergaransi" 
            desc="Harga transparan, pengerjaan rapi, dan layanan purna jual terjamin."
          />
        </div>

        {/* Final Call to Action di halaman terakhir */}
        <div className="flex flex-col items-center gap-4 bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10">
            <p className="text-lg font-medium">Siap amankan properti Anda?</p>
            <a 
            href={waUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-bold transition shadow-md"
            >
                <FaPhoneAlt /> Konsultasi Gratis
            </a>
        </div>
      </div>
    </div>
  );
}

// Sub-komponen kecil untuk item service
function ServiceItem({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl p-5 hover:bg-white/5 transition">
      <div className="mb-3">{icon}</div>
      <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}