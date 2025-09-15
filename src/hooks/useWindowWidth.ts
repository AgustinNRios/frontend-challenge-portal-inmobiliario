'use client';

import { useState, useEffect } from 'react';

function getWindowWidth() {
  const hasWindow = typeof window !== 'undefined';
  return hasWindow ? window.innerWidth : 0;
}

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}
