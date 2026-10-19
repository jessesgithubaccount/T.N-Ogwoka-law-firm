'use client';
import { useEffect, useState } from 'react';

export default function ToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      className={'totop' + (show ? ' show' : '')}
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      ↑
    </button>
  );
}
