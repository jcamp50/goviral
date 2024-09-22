import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { Reviews } from '@/components/Reviews';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='bg-black min-h-screen pb-20 '>
      <main>
        <Navbar />
        <HeroSection />
        <Reviews />
      </main>
    </div>
  );
}
