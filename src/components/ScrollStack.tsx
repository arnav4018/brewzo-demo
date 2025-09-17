import { useLayoutEffect, useRef, useCallback, ReactNode } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem = ({ children, itemClassName = '' }: ScrollStackItemProps) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}: ScrollStackProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value.toString());
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement
      };
    } else {
      const scroller = scrollerRef.current!;
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
        scrollContainer: scroller
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll]
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    // Use requestAnimationFrame to prevent blocking
    requestAnimationFrame(() => {
      if (isUpdatingRef.current) return;
      isUpdatingRef.current = true;

      try {
        const { scrollTop, containerHeight } = getScrollData();
        const stackPositionPx = parsePercentage(stackPosition, containerHeight);
        const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

        const endElement = useWindowScroll
          ? document.querySelector('.scroll-stack-end')
          : scrollerRef.current?.querySelector('.scroll-stack-end');

        const endElementTop = endElement ? getElementOffset(endElement as HTMLElement) : 0;

        cardsRef.current.forEach((card, i) => {
          if (!card || !card.isConnected) return; // Check if element is still in DOM

          try {
            const cardTop = getElementOffset(card);
            const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
            const triggerEnd = cardTop - scaleEndPositionPx;
            const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
            const pinEnd = endElementTop - containerHeight / 2;

            const scaleProgress = Math.max(0, Math.min(1, calculateProgress(scrollTop, triggerStart, triggerEnd)));
            const targetScale = Math.max(0.1, baseScale + i * itemScale); // Prevent scale from going to 0
            const scale = Math.max(0.1, 1 - scaleProgress * (1 - targetScale));
            const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

            let blur = 0;
            if (blurAmount) {
              let topCardIndex = 0;
              for (let j = 0; j < cardsRef.current.length; j++) {
                const jCard = cardsRef.current[j];
                if (!jCard || !jCard.isConnected) continue;
                
                const jCardTop = getElementOffset(jCard);
                const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
                if (scrollTop >= jTriggerStart) {
                  topCardIndex = j;
                }
              }

              if (i < topCardIndex) {
                const depthInStack = topCardIndex - i;
                blur = Math.max(0, depthInStack * blurAmount);
              }
            }

            let translateY = 0;
            const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

            if (isPinned) {
              translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
            } else if (scrollTop > pinEnd) {
              translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
            }

            const newTransform = {
              translateY: Math.round(translateY * 100) / 100,
              scale: Math.round(scale * 1000) / 1000,
              rotation: Math.round(rotation * 100) / 100,
              blur: Math.round(blur * 100) / 100
            };

            const lastTransform = lastTransformsRef.current.get(i);
            const hasChanged =
              !lastTransform ||
              Math.abs(lastTransform.translateY - newTransform.translateY) > 0.5 || // Increased threshold to reduce jitter
              Math.abs(lastTransform.scale - newTransform.scale) > 0.005 ||
              Math.abs(lastTransform.rotation - newTransform.rotation) > 0.5 ||
              Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

            if (hasChanged) {
              const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
              const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : 'none';

              card.style.transform = transform;
              card.style.filter = filter;

              lastTransformsRef.current.set(i, newTransform);
            }

            if (i === cardsRef.current.length - 1) {
              const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
              if (isInView && !stackCompletedRef.current) {
                stackCompletedRef.current = true;
                onStackComplete?.();
              } else if (!isInView && stackCompletedRef.current) {
                stackCompletedRef.current = false;
              }
            }
          } catch (error) {
            console.warn('Error updating card transform:', error);
          }
        });
      } catch (error) {
        console.warn('Error in updateCardTransforms:', error);
      } finally {
        isUpdatingRef.current = false;
      }
    });
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset
  ]);

  const handleScroll = useCallback(() => {
    // Throttle scroll updates to prevent excessive re-renders
    if (!isUpdatingRef.current) {
      updateCardTransforms();
    }
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5, // Reduced for better control
        infinite: false,
        wheelMultiplier: 0.8, // Reduced for smoother scrolling
        lerp: 0.08, // Slightly reduced for stability
        syncTouch: true,
        syncTouchLerp: 0.1
      });

      lenis.on('scroll', handleScroll);

      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const lenis = new Lenis({
        wrapper: scroller,
        content: scroller.querySelector('.scroll-stack-inner') as HTMLElement,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        gestureOrientation: 'vertical',
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075
      });

      lenis.on('scroll', handleScroll);

      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    }
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let retryCount = 0;
    const maxRetries = 10;
    let timeoutId: NodeJS.Timeout | null = null;

    // Wait for next tick to ensure DOM is ready
    const initializeCards = () => {
      try {
        const cards = Array.from(
          useWindowScroll
            ? document.querySelectorAll('.scroll-stack-card')
            : scroller.querySelectorAll('.scroll-stack-card')
        ) as HTMLElement[];
        
        if (cards.length === 0) {
          if (retryCount < maxRetries) {
            retryCount++;
            timeoutId = setTimeout(initializeCards, 50 * retryCount); // Exponential backoff
            return;
          } else {
            console.warn('ScrollStack: Could not find cards after maximum retries');
            return;
          }
        }

        cardsRef.current = cards;

        cards.forEach((card, i) => {
          if (!card) return;
          
          try {
            if (i < cards.length - 1) {
              card.style.marginBottom = `${itemDistance}px`;
            }
            card.style.willChange = 'transform, filter';
            card.style.transformOrigin = 'top center';
            card.style.backfaceVisibility = 'hidden';
            card.style.transform = 'translateZ(0)';
            card.style.webkitTransform = 'translateZ(0)';
            card.style.perspective = '1000px';
            card.style.webkitPerspective = '1000px';
          } catch (error) {
            console.warn('ScrollStack: Error styling card:', error);
          }
        });

        setupLenis();
        
        // Delay initial transform calculation to ensure everything is ready
        requestAnimationFrame(() => {
          updateCardTransforms();
        });
      } catch (error) {
        console.warn('ScrollStack: Error in initializeCards:', error);
      }
    };
    
    // Use a small delay to ensure the component is fully mounted
    timeoutId = setTimeout(initializeCards, 100);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        try {
          lenisRef.current.destroy();
        } catch (error) {
          console.warn('ScrollStack: Error destroying Lenis:', error);
        }
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      lastTransformsRef.current.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    setupLenis,
    updateCardTransforms
  ]);

  return (
    <div className={`scroll-stack-scroller ${useWindowScroll ? 'window-scroll' : 'container-scroll'} ${className}`.trim()} ref={scrollerRef}>
      <div className={`scroll-stack-inner ${useWindowScroll ? 'window-scroll' : 'container-scroll'}`}>
        {children}
        {/* Spacer so the last pin can release cleanly */}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;