'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function HeroSection() {
  return (
    <section className='p-20'>
      <div className='flex flex-col items-center h-fit justify-center'>
        <h1 className='text-8xl  font-bold text-white'>Create trending</h1>
        <h1 className='text-8xl  font-bold text-white'>content in minutes</h1>

        <h1 className='text-4xl font-normal text-muted-foreground'>
          Start boosting your brand with the best short-form content creation tool
        </h1>
      </div>
    </section>
  );
}
