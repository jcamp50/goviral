import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='bg-gradient-to-b from-[#23303D] via-[#111111] to-[#1F131D] min-h-screen pb-20 '>
      <main>
        <Navbar />
        <HeroSection />
      </main>
    </div>
  );
}
