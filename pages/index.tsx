import { useState } from "react";
import { Inter } from "next/font/google";
import { RandomFox } from "@/components/RandomFox";

const inter = Inter({ subsets: ["latin"] });

const generateId = () => Math.random().toString(36).substring(2, 9);
const random = (): number => Math.floor(Math.random() * 123) + 1;

type ImageItem = { id: string; url: string };

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
  ]);

  return (
    <main className={`flex justify-center items-center ${inter.className}`}>
      {images.map(({ id, url }) => (
        <div className="p-4" key={id}>
          <RandomFox image={url} />
        </div>
      ))}
    </main>
  );
}
