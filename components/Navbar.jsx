'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <div className='flex bg-transparent backdrop-blur-sm h-16 w-full justify-around p-4'>
      <div className='flex items-center text-3xl neon-text font-bold justify-center'>
        <a href='/'>
          reviral
        </a>
      </div>
      <NavigationMenu className='w-full max-w-none'>
        <NavigationMenuList className='w-full '>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={navigationMenuTriggerStyle}>
              Features
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={navigationMenuTriggerStyle}>
              Resources
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={navigationMenuTriggerStyle}>
              Partners
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          {/* Repeat for other menu items */}
          <NavigationMenuItem>
            <Link href='/pricing' legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className='flex items-center space-x-4'>
        <Button variant='outline'>
          Login
        </Button>
        <Button variant='secondary'>
          Get started now
        </Button>
        </div>
    </div>
  );
}
