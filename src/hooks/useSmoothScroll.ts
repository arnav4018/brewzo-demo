import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

// Global Lenis instance reference
let globalLenis: Lenis | null = null;

// Get the global Lenis instance
export const getGlobalLenis = () => globalLenis;

const useSmoothScroll = () => {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Only create one global instance
    if (globalLenis) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
      wheelMultiplier: 0.8,
      lerp: 0.08,
      syncTouch: true,
      syncTouchLerp: 0.1
    });

    globalLenis = lenis;

    function raf(time: number) {
      if (globalLenis) {
        globalLenis.raf(time);
      }
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (globalLenis) {
        globalLenis.destroy();
        globalLenis = null;
      }
    };
  }, []);
};

export default useSmoothScroll;
