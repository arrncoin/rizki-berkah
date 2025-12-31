// data\products.ts
export type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
  media: string[]; // foto / video
  message: string;
};

export const products = [
  {
    id: 1,
    name: "Folding Gate Besi",
    price: "Rp 1.200.000 / meter",
    description: "Folding gate kuat, rapi, dan aman untuk toko & ruko.",
    media: [
      "/videos/video1.webm",
      "/images/2.webp",
      "/images/3.jpg",
      "/images/4.jpg"
    ],
    message:
      "Halo Riski Berkah Folding Gate, saya ingin pesan Folding Gate Besi"
  },
  {
    id: 2,
    name: "Pintu Besi Minimalis",
    price: "Custom ukuran & desain",
    description: "Pintu besi minimalis dengan desain modern dan kokoh.",
    media: [
      "/videos/video2.webm",
      "/images/5.jpg"
    ],
    message:
      "Halo Riski Berkah Folding Gate, saya ingin pesan Pintu Besi Minimalis"
  }
];
