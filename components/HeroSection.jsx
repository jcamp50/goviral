'use client';

import * as React from 'react';
import { NotificationBadge } from './NotificationBadge';
import { cn } from '@/lib/utils';


import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className='p-20'>
      <div className='flex flex-col items-center h-fit justify-center'>
        <h1 className='text-8xl font-medium text-white'>
          Create{' '}
          <div className='relative inline-block'>
            trending
            <NotificationBadge />
          </div>
        </h1>
        <h1 className='text-8xl font-medium text-white'>
          content in <span className=''>minutes.</span>
        </h1>
        <h1 className='mt-4 text-2xl font-normal text-muted-foreground'>
          Start boosting your productivity with the best AI powered short-form
        </h1>
        <h1 className='text-2xl font-normal text-muted-foreground'>
          {' '}
          content creation tools. Let <span>reviral</span> break the algorithm
          for you.
        </h1>
        <Button variant='secondary' size='lg' className='mt-8 text-lg neon-border'>
          Get started now
        </Button>
        <div className='mt-8 text-sm text-muted-foreground items-center'>
          No credit card required
        </div>
      </div>
    </section>
  );
}
