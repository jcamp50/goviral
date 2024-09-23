import * as React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { CreateSteps } from './CreateSteps';
import { ShowCase } from './ShowCase';
import { Templates } from './Templates';

export function InfoSection() {
  return (
    <div className='flex flex-col gap-36 px-20'>
      <CreateSteps />
      <ShowCase />
      <Templates />
    </div>
  );
}
