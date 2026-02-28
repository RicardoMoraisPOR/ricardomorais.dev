import { useEffect } from 'react';

import { useLenis } from 'lenis/react';

export const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const STALE_TIME = 1000 * 60 * 5;
export const GARBAGE_COLLECTED_TIME = 1000 * 60 * 30;

export const generateId = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

export const LenisAnchors = () => {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (!href?.startsWith('#')) return;

      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) {
        lenis.scrollTo(el, { offset: -80 });
      }
    };

    const anchors =
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchors.forEach((a) => a.addEventListener('click', handleClick));

    return () => {
      anchors.forEach((a) => a.removeEventListener('click', handleClick));
    };
  }, [lenis]);

  return null;
};
