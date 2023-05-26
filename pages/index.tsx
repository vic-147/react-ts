import Image from 'next/image'
import { Inter } from 'next/font/google'
import { RandomFox } from '@/components/RandomFox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex justify-center items-center ${inter.className}`}
    >
      <RandomFox />
    </main>
  )
}
