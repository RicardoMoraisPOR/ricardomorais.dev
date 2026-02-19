import { useRef, useState } from 'react';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { Search } from 'lucide-react';

import { techStack } from './constants';

export const TechStackGrid = () => {
  const [filter, setFilter] = useState('');
  const [displayed, setDisplayed] = useState(techStack);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilter(value);

    // clear previous timer
    if (debounceRef.current) clearTimeout(debounceRef.current);

    // set new timer
    debounceRef.current = setTimeout(() => {
      const filtered = techStack.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase()),
      );
      setDisplayed(filtered);
    }, 200); // debounce delay
  };

  // Animate when displayed changes
  useGSAP(
    () => {
      if (!containerRef.current) return;

      // fade in + slide up animation
      gsap.fromTo(
        containerRef.current.querySelectorAll('span'),
        { opacity: 0, y: 20, x: 20 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          stagger: 0.005,
          duration: 0.2,
          ease: 'back.out',
        },
      );
    },
    { dependencies: [displayed], scope: containerRef },
  );

  return (
    <div className="col-span-1 md:col-span-2 rounded-xl border border-border/50 bg-card/50 p-6">
      <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-1">
        Tech
      </p>
      <h2 className="text-xl font-semibold text-foreground mb-4">
        I have used
      </h2>
      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="search tech"
          value={filter}
          onChange={handleFilterChange}
          className="w-full rounded-lg border border-border/50 bg-background/50 py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-muted-foreground/50 transition-colors"
        />
      </div>
      <div ref={containerRef} className="flex flex-wrap gap-2">
        {displayed.map((item) => (
          <span
            key={item}
            className={clsx(
              'inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-background/30 px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-accent/50 hover:text-foreground',
              item === 'CSS' && 'translate-1 rotate-5',
            )}
          >
            {item}
          </span>
        ))}
        {displayed.length === 0 && (
          <p className="text-sm text-muted-foreground py-4">
            I haven't use that yet.{' '}
            <span className="opacity-30">(or i forgot to add it)</span>
          </p>
        )}
      </div>
    </div>
  );
};
