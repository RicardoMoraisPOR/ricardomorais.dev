import { useRef } from 'react';

import NextJsIcon from '@/assets/nextjs.svg';
import ReactIcon from '@/assets/react.svg';
import StorybookIcon from '@/assets/storybook.svg';
import TanstackIcon from '@/assets/tanstack.svg';
import TurborepoIcon from '@/assets/turborepo.svg';
import TypescriptIcon from '@/assets/typescript.svg';
import ViteIcon from '@/assets/vite.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const tools = [
  { name: 'React', icon: ReactIcon },
  { name: 'Typescript', icon: TypescriptIcon },
  { name: 'Vite', icon: ViteIcon },
  { name: 'Storybook', icon: StorybookIcon },
  { name: 'Tanstack', icon: TanstackIcon },
  { name: 'Turborepo', icon: TurborepoIcon },
  { name: 'Next.js', icon: NextJsIcon },
];

export const ToolsAnimation = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (skillsRef.current) {
      const items = skillsRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, y: 40, x: 30 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: 'back.inOut',
        },
      );
    }
  });

  return (
    <div className="mt-12">
      <p className="mb-4 text-sm text-muted-foreground">
        {"Here's a quick look at my main tools"}
      </p>
      <div ref={skillsRef} className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool.name}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-sm text-card-foreground transition-colors hover:bg-accent"
          >
            <img
              src={tool.icon}
              alt={`${tool.name} icon`}
              className="h-4 w-4"
            />
            {tool.name}
          </span>
        ))}
      </div>
    </div>
  );
};
