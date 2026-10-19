'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LOGO = '/images/img-2d8eb5d5f6.png';

const ABOUT_SUB = [
  ['/about', 'About us overview'],
  ['/about#history', 'Brief history'],
  ['/about#mission', 'Mission, vision & values'],
];
const TEAM_SUB = [
  ['/team', 'Our team overview'],
  ['/team#tony', 'Tony Ogwoka Nyamagwa'],
  ['/team#celestine', 'Celestine Kageha Osili'],
];

function Dropdown({ href, label, active, items }) {
  const [shut, setShut] = useState(false);
  return (
    <div
      className={'dd' + (shut ? ' shut' : '')}
      onMouseLeave={() => setShut(false)}
      onClick={(e) => {
        if (!e.target.closest('a')) return;
        setShut(true);
        if (document.activeElement && e.currentTarget.contains(document.activeElement)) {
          document.activeElement.blur();
        }
      }}
    >
      <Link href={href} className={active ? 'on' : undefined}>
        {label} ▾
      </Link>
      <div className="ddm">
        {items.map(([h, t]) => (
          <Link key={h} href={h}>
            {t}
          </Link>
        ))}
      </div>
    </div>
  );
}

function DrawerGroup({ label, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={'pg' + (open ? ' open' : '')}>
      <button type="button" className="pgh" aria-expanded={open} onClick={() => setOpen(!open)}>
        {label}
        <i aria-hidden="true" />
      </button>
      <div className="pgs">
        {items.map(([h, t]) => (
          <Link key={h} className="sub" href={h}>
            {t}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [drawer, setDrawer] = useState(false);
  const [homeSection, setHomeSection] = useState('home');

  // Close the drawer whenever the page changes
  useEffect(() => setDrawer(false), [pathname]);

  // Lock page scroll while the drawer is open, close it with Escape
  useEffect(() => {
    document.documentElement.style.overflow = drawer ? 'hidden' : '';
    if (!drawer) return;
    const onKey = (e) => e.key === 'Escape' && setDrawer(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [drawer]);

  // Highlight the matching nav link while scrolling the home page
  useEffect(() => {
    if (pathname !== '/') return;
    const spy = () => {
      const y = window.scrollY + 120;
      let cur = 'home';
      ['home', 'about', 'practice'].forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      });
      setHomeSection(cur);
    };
    spy();
    window.addEventListener('scroll', spy, { passive: true });
    return () => window.removeEventListener('scroll', spy);
  }, [pathname]);

  let cur = '';
  if (pathname === '/') cur = homeSection === 'practice' ? 'practice-page' : homeSection;
  else if (pathname.startsWith('/about')) cur = 'about-us';
  else if (pathname.startsWith('/team')) cur = 'team-page';
  else if (pathname.startsWith('/practice-areas')) cur = 'practice-page';
  const on = (k) => (cur === k ? 'on' : undefined);

  return (
    <>
      <header>
        <nav aria-label="Main">
          <Link className="logo" href="/" aria-label="T.N.Ogwoka & Osili Advocates home">
            <img src={LOGO} alt="T.N.Ogwoka & Osili Advocates" />
          </Link>
          <div className="links">
            <Link href="/" className={on('home')}>Home</Link>
            <Dropdown href="/about" label="About us" active={cur === 'about-us'} items={ABOUT_SUB} />
            <Dropdown href="/team" label="Our team" active={cur === 'team-page'} items={TEAM_SUB} />
            <Link href="/practice-areas" className={on('practice-page')}>Practice areas</Link>
          </div>
          <Link className="cta-nav" href="/contact">Book Consultation</Link>
          <button
            className="menu-btn"
            type="button"
            aria-label="Open menu"
            aria-controls="drawer"
            onClick={() => setDrawer(true)}
          >
            <span><i /><i /><i /></span>
          </button>
        </nav>
      </header>

      <div
        className={'drawer' + (drawer ? ' open' : '')}
        id="drawer"
        onClick={(e) => e.target.closest('a') && setDrawer(false)}
      >
        <div className="scrim" onClick={() => setDrawer(false)} />
        <div className="panel" role="dialog" aria-modal="true" aria-label="Site menu">
          <button className="x" type="button" aria-label="Close menu" onClick={() => setDrawer(false)}>×</button>
          <Link href="/">Home</Link>
          <DrawerGroup label="About us" items={ABOUT_SUB} />
          <DrawerGroup label="Our team" items={TEAM_SUB} />
          <Link href="/practice-areas">Practice areas</Link>
          <Link className="panel-cta" href="/contact">Book Consultation</Link>
        </div>
      </div>
    </>
  );
}
