'use client';

import * as React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Image from 'next/image';

// Dummy review data
const reviews = [
  {
    name: 'John Doe',
    review:
      'I saw this on Instagram and it’s the best content creation tool i’ve ever used!',
    rating: 5,
    image: '/images/review1.webp',
  },
  {
    name: 'Jane Smith',
    review:
      'Reviral makes it effortless to create high-quality TikToks that actually get engagement.',
    rating: 4,
    image: '/images/review2.webp',
  },
  {
    name: 'Alex Johnson',
    review: 'I was struggling to keep up with content creation, but Reviral lets me hit one button and post.',
    rating: 5,
    image: '/images/review3.png',
  },
  {
    name: 'Emily Davis',
    review:
      'I’ve tried so many content creation apps, but nothing compares to Reviral.',
    rating: 4,
    image: '/images/review4.jpg',
  },
  {
    name: 'Michael Brown',
    review:
      'Reviral does all the hard work for me, and my videos get more engagement than ever.',
    rating: 5,
    image: '/images/review5.jpg',
  },
];

export function Reviews() {
  return (
    <section className='w-full py-10 px-20 mb-10'>
      <div className='flex flex-row'>
        <div className='flex flex-col text-5xl w-1/2 items-start gap-3 font-medium text-gradient mb-8'>
          <h1>
            Loved by <span className=''>users.</span>
          </h1>
          <h1>
            Loved by <span className='text-gradient '>top creators.</span>
          </h1>
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-full max-w-4xl mx-auto'
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className='md:basis-1/3 lg:basis-1/2'>
                <div className='p-4'>
                  <Card className='shadow-lg h-96 flex flex-col justify-between border-[#111111] bg-[#23303D]/10 backdrop-blur-md'>
                    <CardContent className='p-6 text-white'>
                      <p className='flex items-start justify-center text-foreground  my-4'>
                        <span className='text-gradient font-roboto text-7xl font-bold'>
                          &ldquo;
                        </span>
                        <span className='mx-2 text-2xl font-normal'>
                          {review.review}
                        </span>
                        <span className='text-gradient text-7xl font-roboto font-bold leading-none self-end'>
                          &rdquo;
                        </span>
                      </p>
                    </CardContent>
                    <CardFooter className='flex gap-4 justify-start items-center p-6'>
                      <Image
                        src={review.image}
                        alt={review.name}
                        className='rounded-full'
                        width={100}
                        height={100}
                      />
                      <div className='flex items-start flex-col'>
                        <h3 className='text-xl font-semibold text-muted-foreground'>
                          {review.name}
                        </h3>
                        <StarRating rating={review.rating} />
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='z-10' />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className='flex'>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          xmlns='http://www.w3.org/2000/svg'
          fill={index < rating ? 'white' : 'none'}
          viewBox='0 0 24 24'
          stroke='white'
          strokeWidth='2'
          className='w-5 h-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z'
          />
        </svg>
      ))}
    </div>
  );
};
