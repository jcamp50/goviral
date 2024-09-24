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

const features = [
  {
    title: 'Story Video Generator',
    href: '/story-generator',
    description: 'Create engaging story-driven videos effortlessly.',
  },
  {
    title: 'Clipping Video Generator',
    href: '/clipping-generator',
    description: 'Clip and edit videos to highlight important moments.',
  },
  {
    title: 'Random Fact Video Generator',
    href: '/random-fact-generator',
    description: 'Generate fun random fact videos that entertain and inform.',
  },
];

const resources = [
  {
    title: 'Join our Discord community',
    href: 'https://discord.com',
    description: 'Connect with our community for tips and support.',
  },
  {
    title: 'Reviral Guide',
    href: '/guide',
    description: 'Learn how to use Reviral to its fullest potential.',
  },
];

const partners = [
  {
    title: 'Become a Partner',
    href: '/partners/become',
    description: 'Join us and become a partner in growing the platform.',
  },
  {
    title: 'Partner Dashboard',
    href: '/partners/dashboard',
    description: 'Access the tools and resources to manage your partnership.',
  },
];

export function Navbar() {
  return (
    <div className='sticky top-0 flex bg-black/10 backdrop-blur-md h-16 w-full justify-around z-50 p-4'>
      <div className='flex items-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#567695] to-[#7b4b73] font-bold justify-center'>
        <a href='/'>reviral</a>
      </div>
      <NavigationMenu className='w-full max-w-none'>
        <NavigationMenuList className='w-full'>
          {/* Features Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent className=' rounded-md p-4'>
              <ul className='grid w-[400px] gap-3 md:w-[500px] md:grid-cols-1'>
                {features.map((feature) => (
                  <ListItem
                    key={feature.title}
                    title={feature.title}
                    href={feature.href}
                  >
                    {feature.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Resources Dropdown */}
          <NavigationMenuItem className='relative'>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent className='rounded-md p-4'>
              <ul className='grid w-[400px] gap-3 md:w-[500px] md:grid-cols-1'>
                {resources.map((resource) => (
                  <ListItem
                    key={resource.title}
                    title={resource.title}
                    href={resource.href}
                  >
                    {resource.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Partners Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Partners</NavigationMenuTrigger>
            <NavigationMenuContent className=' rounded-md p-4'>
              <ul className='grid w-[400px] gap-3 md:w-[500px] md:grid-cols-1'>
                {partners.map((partner) => (
                  <ListItem
                    key={partner.title}
                    title={partner.title}
                    href={partner.href}
                  >
                    {partner.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Pricing Link */}
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
        <Button variant='outline'>Login</Button>
        <Button variant='secondary'>Get started now</Button>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#e0e0e0] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className='text-sm font-semibold leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#567695] to-[#7b4b73]'>
              {title}
            </div>
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
