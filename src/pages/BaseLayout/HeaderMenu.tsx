import { useRef, useState } from 'react';

import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { FolderOpen, Home, User, Wrench } from 'lucide-react';
import { Link, useLocation } from 'react-router';

const navLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About', href: '/about', icon: User },
  { label: 'Blog', href: '/blog', icon: FolderOpen },
  { label: 'Uses', href: '/uses', icon: Wrench },
];

export const HeaderMenu = () => {
  const location = useLocation();
  const navRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const optionsRef = useRef<Array<HTMLAnchorElement | null>>([]);
  const highlightRef = useRef<HTMLDivElement | null>(null);

  const [firstAnimation, setFirstAnimation] = useState(true);
  const isMobile = useMediaQuery({ breakpoint: 'sm', type: 'max' });

  const currentPath = location.pathname;

  const index = navLinks.findIndex((option) => {
    if (option.href === '/') {
      return currentPath === '/';
    }

    return (
      currentPath === option.href || currentPath.startsWith(option.href + '/')
    );
  });

  useGSAP(() => {
    const el = highlightRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    if (index !== undefined && optionsRef.current[index]) {
      const target = optionsRef.current[index]!;
      const targetRect = target.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const offsetLeft = targetRect.left - containerRect.left;
      const offsetTop = targetRect.top - containerRect.top;
      const offsetWidth = targetRect.width;
      const offsetHeight = targetRect.height;

      const props = {
        width: offsetWidth,
        height: offsetHeight,
        x: offsetLeft - 1,
        y: offsetTop - 1,
        opacity: 1,
      };

      if (firstAnimation) {
        setFirstAnimation(false);
        gsap.set(el, props);
      } else {
        gsap.to(el, {
          ...props,
          duration: 0.45,
          ease: 'power2.inOut',
        });
      }
    } else {
      if (firstAnimation) {
        setFirstAnimation(false);
        gsap.set(el, { opacity: 0 });
      } else {
        gsap.to(el, { opacity: 0, duration: 0.25 });
      }
    }
  }, [index, firstAnimation, isMobile]);

  return (
    <nav
      ref={navRef}
      className="fixed left-1/2 z-50 -translate-x-1/2"
      aria-label="Main navigation"
    >
      <div
        ref={containerRef}
        className="relative flex items-center gap-1 rounded-full border border-border/60 bg-card/30 px-2 py-1 backdrop-blur-xl shadow-2xl shadow-black/40"
      >
        <div
          ref={highlightRef}
          className="pointer-events-none absolute left-0 top-0 z-0 rounded-full bg-accent"
          style={{ width: 0, height: 0, opacity: 0 }}
        />
        {navLinks.map((link, idx) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.label}
              to={link.href}
              ref={(el: HTMLAnchorElement | null) => {
                optionsRef.current[idx] = el;
              }}
              className={clsx(
                'relative z-10 flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors',
                idx === index
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <Icon size={16} className="shrink-0" />
              {!isMobile && (
                <span className="whitespace-nowrap">{link.label}</span>
              )}
            </Link>
          );
        })}
        <div className="mx-1 h-5 w-px bg-border/60" aria-hidden="true" />
        <div className="flex items-center justify-center rounded-full bg-card/90 p-1 z-10">
          <AnimatedThemeToggler />
        </div>
      </div>
    </nav>
  );
};
