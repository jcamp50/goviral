'use client';

import * as React from 'react';

export function Templates() {
  return (
    <div className='flex flex-col w-full gap-8 items-center'>
      <p1 className='text-5xl mb-10 font-medium'>
        We've perfected{' '}
        <span className='text-gradient'>
          viral templates
        </span>
      </p1>
      <div className='flex flex-row w-full justify-evenly'>
        {/* Story Videos Template */}
        <div className='flex flex-col items-center'>
          <p1 className='text-2xl font-medium'>Story videos</p1>
          <video
            className='mt-4 w-72 h-[500px] rounded-lg object-cover'
            muted
            playsInline
            src='/videos/story_example.mp4' // Replace with your video file path
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
          />
        </div>
        <div className='flex flex-col items-center'>
          <p1 className='text-2xl font-medium'>Clipping videos</p1>
          <video
            className='mt-4 w-72 h-[500px] rounded-lg object-cover'
            muted
            playsInline
            src='/videos/clipping_example.mp4' // Replace with your video file path
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
          />
        </div>
        {/* Random Fact Videos Template */}
        <div className='flex flex-col items-center'>
          <p1 className='text-2xl font-medium'>Random fact videos</p1>
          <video
            className='mt-4 w-72 h-[500px] rounded-lg object-cover'
            muted
            playsInline
            src='/videos/random_facts_example.mp4' // Replace with your video file path
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
          />
        </div>
      </div>
      <p1 className='text-5xl mt-10 mb-36 font-medium'>and many more...</p1>
    </div>
  );
}
