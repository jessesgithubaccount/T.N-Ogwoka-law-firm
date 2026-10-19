'use client';
import { useEffect } from 'react';

/* Keeps the Practice Areas block on the home page as tall as the About block (desktop only). */
export default function HomeSync() {
  useEffect(() => {
    const sync = () => {
      const a = document.getElementById('about');
      const p = document.getElementById('practice');
      if (!a || !p) return;
      p.style.minHeight = '';
      if (window.innerWidth < 700) return;
      p.style.minHeight = a.offsetHeight + 'px';
    };
    sync();
    window.addEventListener('resize', sync);
    window.addEventListener('load', sync);
    return () => {
      window.removeEventListener('resize', sync);
      window.removeEventListener('load', sync);
    };
  }, []);
  return null;
}
