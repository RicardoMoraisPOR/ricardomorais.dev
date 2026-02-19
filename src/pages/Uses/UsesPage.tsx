import { useRef } from 'react';

import { PageTitle } from '@/components/PageTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { TechStackGrid } from './TechStackGrid';
import { UsesSection } from './UsesSection';
import { development, miscellaneous, officeSetup } from './constants';

export const UsesPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();
    tl.fromTo(
      containerRef.current,
      { height: 0, opacity: 0 },
      { height: 'auto', opacity: 1, duration: 0.4, ease: 'ease.out' },
    ).from(
      containerRef.current.children,
      {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.3,
        ease: 'ease.inOut',
      },
      '-=0.2',
    );
  });

  return (
    <div>
      <PageTitle
        brief={
          <span>
            A comprehensive list of the tools, technologies, and hardware I use
            for <strong>personal</strong> software development.
          </span>
        }
        title="What I use"
        page="Uses"
      />
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16"
      >
        <UsesSection category={development} />

        <UsesSection category={officeSetup} />

        <TechStackGrid />

        <UsesSection category={miscellaneous} className="md:col-span-2" />
      </div>
    </div>
  );
};
