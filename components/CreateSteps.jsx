import * as React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export function CreateSteps() {
  return (
    <div className='flex flex-col w-full gap-8 items-center'>
      <p1 className='text-5xl mb-10 font-medium'>
        Effortless short video creation
      </p1>
      <div className='flex flex-row w-full justify-evenly'>
        <div className='flex flex-row items-center'>
          <p1 className='text-[200px]  font-medium text-gradient'>
            1
          </p1>
          <Card className='w-80 h-96 bg-white/10 border-transparent backdrop-blur-md z-10 -translate-x-6'>
            <CardContent className='flex flex-col justify-end h-full'>
              <div className='flex flex-grow items-center justify-center'>
                <p1 className='text-lg font-normal text-center'>Add Image</p1>
              </div>
              <p1 className='text-md text-white font-normal'>
                Start by picking one of our popular templates.
              </p1>
            </CardContent>
          </Card>
        </div>
        <div className='flex flex-row items-center'>
          <p1 className='text-[200px] font-medium text-gradient '>
            2
          </p1>
          <Card className='w-80 h-96 bg-white/10 border-transparent backdrop-blur-md z-10 -translate-x-12'>
            <CardContent className='flex flex-col justify-end h-full'>
              <div className='flex flex-grow items-center justify-center'>
                <p1 className='text-lg font-normal text-center'>Add Image</p1>
              </div>
              <p1 className='text-md text-white font-normal'>
                Customize video style, background footage, captions, and
                voiceover with our AI assistant.
              </p1>
            </CardContent>
          </Card>
        </div>
        <div className='flex flex-row items-center'>
          <p1 className='text-[200px] font-medium text-gradient'>
            3
          </p1>
          <Card className='w-80 h-96 bg-white/10 border-transparent backdrop-blur-md z-10 -translate-x-12'>
            <CardContent className='flex flex-col justify-end h-full'>
              <div className='flex flex-grow items-center justify-center'>
                <p1 className='text-lg font-normal text-center'>Add Image</p1>
              </div>
              <p1 className='text-md text-white font-normal'>
                Edit final touches and generate your viral video!
              </p1>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
