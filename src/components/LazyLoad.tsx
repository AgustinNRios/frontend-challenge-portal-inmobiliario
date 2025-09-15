'use client';

import { useInView } from 'react-intersection-observer';
import { ReactNode, useEffect, useState } from 'react';

interface LazyLoadProps {
  children: ReactNode;
  placeholderHeight?: string;
}

const LazyLoad = ({ children, placeholderHeight = '600px' }: LazyLoadProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo se activa una vez
    threshold: 0.1, // Se activa cuando el 10% del componente es visible
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsMounted(true);
    }
  }, [inView]);

  return (
    <div ref={ref} style={{ minHeight: !isMounted ? placeholderHeight : 'auto' }}>
      {isMounted ? children : null}
    </div>
  );
};

export default LazyLoad;
