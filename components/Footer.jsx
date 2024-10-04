'use client';

import * as React from 'react';
import { Separator } from '@/components/ui/separator';
import { DiscordLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons';


export function Footer() {
  return (
    <div className='flex flex-col items-center py-8  text-white'>
      {/* Separator */}
      <Separator
        orientation='horizontal'
        className='bg-[#111111] w-[95%] mb-6'
      />

      {/* Two Side-by-Side Boxes */}
      <div className='flex flex-row px-20 w-full justify-around mb-8'>
        {/* Left Box */}
        <div className='flex flex-col items-start w-1/2 px-6'>
          {/* Company Logo Text */}
          <h2 className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#567695] to-[#7b4b73] font-bold justify-center mb-2'>
            reviral
          </h2>

          {/* Small Blurb */}
          <p className='text-muted-foreground w-1/3 mb-4'>
            Your go-to platform for creating viral videos in minutes. Utilize
            AI-powered tools to bring your ideas to life.
          </p>

          {/* Social Media Icons */}
          <div className='flex space-x-4'>
            <a
              href='https://discord.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <DiscordLogoIcon alt='Discord' className='h-6 w-6' />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramLogoIcon
                alt='Instagram'
                className='h-6 w-6'
              />
            </a>
            
          </div>
        </div>

        {/* Right Box */}
        <div className='flex flex-col w-1/2 px-6'>
          {/* Two Columns */}
          <div className='flex flex-row justify-evenly'>
            {/* Column 1: Features */}
            <div className='flex flex-col'>
              <h3 className='text-lg font-semibold mb-2'>Features</h3>
              <a
                href='/story-generator'
                className='text-muted-foreground hover:text-white mb-1'
              >
                Story video generator
              </a>
              <a
                href='/random-fact-generator'
                className='text-muted-foreground hover:text-white mb-1'
              >
                Random Fact video generator
              </a>
              <a
                href='/clipping-generator'
                className='text-muted-foreground hover:text-white mb-1'
              >
                Clipping video generator
              </a>
            </div>

            {/* Column 2: Resources */}
            <div className='flex flex-col'>
              <h3 className='text-lg font-semibold mb-2'>Resources</h3>
              <a
                href='https://discord.com'
                className='text-muted-foreground hover:text-white mb-1'
              >
                Join our Discord
              </a>
              <a href='/guide' className='text-muted-foreground hover:text-white mb-1'>
                Reviral guide
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Links and Copyright */}
      <div className='flex flex-col items-center'>
        <div className='flex space-x-8'>
          <a href='/about' className='text-muted-foreground hover:text-white'>
            About Us
          </a>
          <a href='/contact' className='text-muted-foreground hover:text-white'>
            Contact
          </a>
          <a href='/privacy' className='text-muted-foreground hover:text-white'>
            Privacy Policy
          </a>
          <a href='/terms' className='text-muted-foreground hover:text-white'>
            Terms of Service
          </a>
        </div>

        {/* Copyright */}
        <div className='text-gray-500 text-sm mt-4'>
          © {new Date().getFullYear()} Reviral. All rights reserved.
        </div>
      </div>
    </div>
  );
}
