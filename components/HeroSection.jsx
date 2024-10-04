'use client';

import * as React from 'react';
import { NotificationBadge } from './NotificationBadge';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className='mt-20 p-20'>
      <div className='flex flex-col items-center h-fit justify-center'>
        <h1 className='text-9xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#567695] to-[#7b4b73]'>
          Create{' '}
          <div className='text-white relative inline-block'>
            trending
            <NotificationBadge />
          </div>
        </h1>
        <h1 className='text-9xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#567695] to-[#7b4b73] '>
          content in <span className=''>minutes.</span>
        </h1>
        <h1 className='mt-8 text-4xl font-normal text-muted-foreground'>
          Start boosting your productivity with the best AI powered short-form
        </h1>
        <h1 className='text-4xl mt-4 font-normal text-muted-foreground'>
          {' '}
          content creation tools. Let <span>reviral</span> break the algorithm
          for you.
        </h1>
        <Button
          variant='secondary'
          size='xl'
          className='mt-20 text-3xl font-semibold neon-border'
        >
          Get started now
        </Button>
        <div className='mt-8 text-sm text-muted-foreground items-center'>
          No credit card required
        </div>
        <div className='flex flex-col mt-20 text-3xl font-normal text-muted-foreground rounded-xl justify-center items-center'>
          Backing the best creators on
          <div className='flex flex-row gap-7 mt-8'>
            <div className='flex flex-row'>
              <Image
                src='/icons/hero-insta-logo.svg'
                alt='Icon 1'
                width={90}
                height={90}
              />
              <Image
                className='translate-y-4'
                src='/icons/hero-insta-text.svg'
                alt='Icon 1'
                width={170}
                height={50}
              />
            </div>
            <div className='flex flex-row'>
              <Image
                src='/icons/hero-tiktok-logo.svg'
                alt='Icon 2'
                width={90}
                height={90}
              />
              <Image
                src='/icons/hero-tiktok-text.svg'
                alt='Icon 2'
                width={150}
                height={120}
              />
            </div>
            <div className='flex items-center flex-row'>
              <Image
                src='/icons/hero-shorts-logo.svg'
                alt='Icon 3'
                width={70}
                height={70}
              />
              <Image
                className='translate-y-6'
                src='/icons/hero-shorts-text.svg'
                alt='Icon 3'
                width={140}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
