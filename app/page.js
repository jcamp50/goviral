import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { Reviews } from '@/components/Reviews';
import  { InfoSection } from '@/components/InfoSection';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='bg-radial-gradient min-h-screen '>
      <main>
        <Navbar />
        <HeroSection />
        <InfoSection/>
        <Reviews />
        <Footer />
      </main>
    </div>
  );
}
