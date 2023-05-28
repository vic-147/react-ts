import { useState } from "react";
import type { MouseEventHandler } from "react";
import { random as lodashRandom } from "lodash";
import { Inter } from "next/font/google";
import Head from "next/head";
import { LazyImage } from "@/components/RandomFox";

const inter = Inter({ subsets: ["latin"] });

const generateId = () => Math.random().toString(36).substring(2, 9); //
const random = (): number => lodashRandom(1, 123); //

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newImageItem: ImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };

    setImages([...images, newImageItem]);
  };

  return (
    <>
      <Head>
        <title>Platzi test</title>
        <script
          defer
          data-domain="<yourdomain.com>"
          src="https://plausible.io/js/script.tagged-events.js"
        ></script>
      </Head>
      <main
        className={`flex justify-center items-center flex-col ${inter.className}`}
      >
        <button onClick={addNewFox}>Change fox</button>
        {images.map(({ id, url }) => (
          <div className="p-4" key={id}>
            <LazyImage
              src={url}
              title={url}
              width={320}
              height="auto"
              onClick={() => console.log(url)}
              className="bg-gray-300 rounded-md"
            />
          </div>
        ))}
      </main>
    </>
  );
}
