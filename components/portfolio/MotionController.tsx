'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function MotionController() {
  const progressRef = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    root.classList.add('motion-ready');
    revealNodes.forEach((node) => {
      const delay = node.dataset.revealDelay;
      if (delay) node.style.setProperty('--reveal-delay', `${delay}ms`);
    });

    let observer: IntersectionObserver | undefined;
    if (reduceMotion) {
      revealNodes.forEach((node) => node.classList.add('is-revealed'));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-revealed');
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      );
      revealNodes.forEach((node) => observer?.observe(node));
    }

    let animationFrame = 0;
    const updateProgress = () => {
      animationFrame = 0;
      const scrollableDistance = root.scrollHeight - window.innerHeight;
      const progress = scrollableDistance > 0 ? Math.min(window.scrollY / scrollableDistance, 1) : 0;
      progressRef.current?.style.setProperty('transform', `scaleX(${progress})`);
    };
    const scheduleProgressUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', scheduleProgressUpdate, { passive: true });
    window.addEventListener('resize', scheduleProgressUpdate);

    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', scheduleProgressUpdate);
      window.removeEventListener('resize', scheduleProgressUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true"><span ref={progressRef} /></div>;
}
