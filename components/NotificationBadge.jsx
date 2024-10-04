'use client';

import { useState, useEffect } from 'react';

export function NotificationBadge() {
  const [count, setCount] = useState(0); // Start count at 0
  const [visible, setVisible] = useState(false); // Start invisible
  const [isShaking, setIsShaking] = useState(false); // To control shake animation

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        setIsShaking(true); // Trigger shake animation
        // Increment the count by a random number between 3 and 8
        const randomIncrement = Math.floor(Math.random() * (11 - 4 + 1)) + 4;
        setCount((prevCount) => Math.min(prevCount + randomIncrement, 100)); // Stop at 100
      }
    }, 1500); // Increment every second

    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    if (count > 0) {
      setVisible(true); // Make badge visible when count starts
    }

    // Remove shake animation after 500ms
    if (isShaking) {
      const timeout = setTimeout(() => setIsShaking(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [isShaking]);

  return (
    <>
      {visible && (
        <div
          className={`absolute bg-red-500 text-white text-3xl font-bold rounded-full w-20 h-14 flex items-center justify-center -top-1 -right-6 ${
            isShaking ? 'notification-shake' : ''
          }`}
        >
          {count < 100 ? count : '99+'}
        </div>
      )}
    </>
  );
}
