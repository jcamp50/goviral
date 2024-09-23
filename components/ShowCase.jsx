import * as React from 'react';

export function ShowCase() {
  return (
    <div className='h-fit bg-gradient-to-r rounded-3xl p-10 from-[#567695] to-[#7b4b73]'>
      <div className='flex flex-col gap-36 w-full'>
        <div className='flex flex-row'>
          <div className='flex flex-col w-1/2'>
            <h1 className='text-5xl mb-4 font-semibold'>
              Everything you need, all in one place.
            </h1>
            <p className='text-2xl text-[#d4d4d4]'>
              Our platform offers everything you need to create stunning videos
              effortlessly. Choose from a wide range of video niche templates,
              guided by our powerful AI assistant to ensure your content stands
              out. With auto-generated captions, 50+ AI voices, and engaging
              backgrounds, your videos will captivate any audience. Add music,
              edit with ease, and watch your creations come to life—all in one
              seamless platform. Whether you're a content creator, marketer, or
              influencer, we've got you covered from start to finish!
            </p>
          </div>
          <div className='flex flex-grow items-center justify-center'>
            <p1 className='text-lg font-normal text-[#111111] text-center'>
              Add Image
            </p1>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-grow items-center justify-center'>
            <p1 className='text-lg font-normal text-[#111111] text-center'>
              Add Image
            </p1>
          </div>
          <div className='flex flex-col w-1/2'>
            <h1 className='text-5xl mb-4 font-semibold'>
              Get Guidance from Top Creators in Your Niche.
            </h1>
            <p className='text-2xl text-[#d4d4d4]'>
              We've trained our AI assistant on insights and strategies from the
              most successful creators in your niche, ensuring you have access
              to the secrets of viral success. Whether you're wondering about
              the best video format, trending topics, or how to optimize
              engagement, our AI is here to provide immediate, data-driven
              answers. Say goodbye to uncertainty and follow expert advice
              tailored to your unique needs—guidance you can trust to elevate
              your content and take your channel to the top. Start creating with
              confidence, knowing you have the expertise of the best at your
              fingertips.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
