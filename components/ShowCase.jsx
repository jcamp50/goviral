import * as React from 'react';

export function ShowCase() {
  return (
    <div className='h-fit gradient-bg rounded-3xl p-10 '>
      <div className='flex flex-col gap-36 w-full'>
        <div className='flex flex-row'>
          <div className='flex flex-col w-1/2'>
            <h1 className='text-5xl mb-4 font-semibold'>
              Everything you need, all in one place.
            </h1>
            <p className='text-2xl text-[#d4d4d4]'>
              Create stunning videos effortlessly with our all-in-one platform.
              Access niche templates, AI-guided assistance, auto-generated
              captions, 50+ AI voices, and engaging backgrounds. Add music, edit
              with ease, and captivate your audience—perfect for creators,
              marketers, and influencers.
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
              Our AI assistant is trained on top creators' strategies, giving
              you access to the secrets of viral success. From video formats to
              trending topics and engagement tips, get data-driven, expert
              advice tailored to your needs. Create confidently with insights
              from the best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
