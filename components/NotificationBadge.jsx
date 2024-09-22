'use client';

import * as React from 'react';

export function NotificationBadge() {
  return (
    <div className='absolute bg-red-500 text-white text-lg font-bold rounded-full w-14 h-10 flex items-center justify-center -top-1 -right-6'>
      99+
    </div>
  );
}