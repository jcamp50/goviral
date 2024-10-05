'use client';

import * as React from 'react';
import { NotificationBadge } from '@/components/NotificationBadge';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import { Button } from './ui/button';
import { LoginDialog } from './LoginDialog';

export function HeroSection() {
  return (
    <section className='mt-16 p-20'>
      <div className='flex flex-col items-center h-fit justify-center'>
        <h1 className='text-8xl font-medium text-gradient'>
          Create{' '}
          <div className='text-white relative inline-block'>
            trending
            <NotificationBadge />
          </div>
        </h1>
        <h1 className='text-8xl font-medium text-gradient '>
          content in minutes.
        </h1>
        <h1 className='mt-8 text-2xl font-normal text-muted-foreground'>
          Start boosting your productivity with the best AI powered short-form
        </h1>
        <h1 className='text-2xl mt-4 font-normal text-muted-foreground'>
          {' '}
          content creation tools. Let <span>reviral</span> break the algorithm
          for you.
        </h1>
        <div className='button-container'>
          <LoginDialog
            triggerButton={
              <Button
                variant='secondary'
                size='lg'
                className='mt-20 text-xl font-semibold neon-border'
              >
                Get started now
              </Button>
            }
          />

          <div className='text-overlay h-16 text-xl rounded-2xl px-10 mt-20 font-semibold'>
            <span className='overlay-text'>Get started now</span>
          </div>
        </div>

        <div className='flex flex-col mt-20 text-xl font-normal text-muted-foreground rounded-xl justify-center items-center'>
          Backing the best creators on
          <div className='flex flex-row gap-7 mt-2'>
            <div className='flex flex-row'>
              <Image
                src='/icons/hero-insta-logo.svg'
                alt='Icon 1'
                width={60}
                height={90}
              />
              <Image
                className='translate-y-4'
                src='/icons/hero-insta-text.svg'
                alt='Icon 1'
                width={110}
                height={50}
              />
            </div>
            <div className='flex flex-row'>
              <Image
                src='/icons/hero-tiktok-logo.svg'
                alt='Icon 2'
                width={60}
                height={90}
              />
              <Image
                className='translate-y-1'
                src='/icons/hero-tiktok-text.svg'
                alt='Icon 2'
                width={100}
                height={120}
              />
            </div>
            <div className='flex items-center flex-row'>
              <Image
                src='/icons/hero-shorts-logo.svg'
                alt='Icon 3'
                width={50}
                height={70}
              />
              <Image
                className='translate-y-5'
                src='/icons/hero-shorts-text.svg'
                alt='Icon 3'
                width={100}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
