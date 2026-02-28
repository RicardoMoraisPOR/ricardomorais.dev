import { useRef } from 'react';

import { StyledLink } from '@/components/LinkHover';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

type Timeline = {
  id: string;
  companyName?: string;
  companyLink?: string;
  companyJob: string;
  jobArea: string;
  companyStart: string;
  companyEnd: string;
  tools: Array<{ name: string; logo?: string }>;
};

const timelineData: Timeline[] = [
  {
    id: 'santander',
    companyName: 'Bank Santander',
    companyLink: 'https://www.santander.com/',
    companyJob: 'Software Engineer',
    jobArea: 'Fintech',
    companyStart: 'Jul 2025',
    companyEnd: 'Present',
    tools: [{ name: 'React' }, { name: 'TypeScript' }],
  },
  {
    id: 'nextbitt',
    companyName: 'Nextbitt',
    companyLink: 'https://www.nextbitt.com/',
    companyJob: 'Software Engineer',
    jobArea: 'Sustainability & Asset Management',
    companyStart: 'Mar 2024',
    companyEnd: 'Jul 2025',
    tools: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Storybook' },
      { name: 'Next.js' },
      { name: 'MUI' },
    ],
  },
  {
    id: 'acin',
    companyName: 'ACIN Group',
    companyLink: 'https://acin.pt/',
    companyJob: 'Front-end Developer',
    jobArea: 'Healthcare & Digital Signatures',
    companyStart: 'Feb 2021',
    companyEnd: 'Mar 2024',
    tools: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Storybook' },
      { name: 'GraphQL' },
      { name: 'Styled Components' },
    ],
  },
  {
    id: 'wig',
    companyName: 'WIG - Work is Good',
    companyLink: 'https://www.wig.pt/',
    companyJob: 'Mobile & Web Developer',
    jobArea: 'Real Estate & Logistics',
    companyStart: 'Sep 2018',
    companyEnd: 'Oct 2020',
    tools: [
      { name: 'Xamarin' },
      { name: 'C#' },
      { name: 'JavaScript' },
      { name: 'ASP.NET Core' },
      { name: 'Blazor' },
    ],
  },
  {
    id: 'esco',
    companyJob: 'CTE in Computer Systems Management and Programming',
    jobArea: 'Education',
    companyStart: 'Sep 2015',
    companyEnd: 'Jun 2018',
    tools: [
      { name: 'PHP' },
      { name: 'C#' },
      { name: 'JavaScript' },
      { name: 'CSS' },
      { name: 'HTML' },
      { name: 'React' },
    ],
  },
];

type WorkExperienceProps = {
  inView: boolean;
};

export const WorkExperience = ({ inView }: WorkExperienceProps) => {
  const hasAnimated = useRef(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (inView && !hasAnimated.current && timelineRef.current) {
      hasAnimated.current = true;
      const items = timelineRef.current.children;
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
  }, [inView]);

  return (
    <section className="flex flex-col gap-8 max-w-4xl mx-auto">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
          Experience
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          Work Timeline
        </h2>
      </div>

      <div className="relative">
        <div
          className="absolute left-1.75 top-3 bottom-3 w-px bg-border md:left-35"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-0 self-center" ref={timelineRef}>
          {timelineData.map((entry, index) => (
            <div
              key={entry.id}
              className="group relative flex gap-6 md:gap-10"
              style={{ opacity: 0, y: 40, x: 30 }}
            >
              <div className="hidden md:flex md:w-30 md:shrink-0 md:justify-end md:pt-6">
                <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                  {entry.companyStart}
                </span>
              </div>

              <div className="relative flex shrink-0 flex-col items-center pt-6">
                <div
                  className={`z-10 h-3.5 w-3.5 rounded-full border-2 ${
                    index === 0
                      ? 'border-foreground bg-foreground'
                      : 'border-muted-foreground/40 bg-background'
                  }`}
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 pb-12 pt-4">
                <span className="text-xs font-mono text-muted-foreground md:hidden">
                  {entry.companyStart} — {entry.companyEnd}
                </span>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-semibold text-foreground">
                      {entry.companyJob}
                    </h3>
                    {entry.companyName && (
                      <>
                        <span className="text-muted-foreground/50">{'/'}</span>
                        {entry.companyLink ? (
                          <StyledLink
                            to={entry.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-base"
                          >
                            {entry.companyName}
                          </StyledLink>
                        ) : (
                          <span className="text-base text-muted-foreground">
                            {entry.companyName}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground/70">
                    {entry.jobArea}
                  </p>
                  <p className="hidden text-xs font-mono text-muted-foreground/50 md:block">
                    {entry.companyStart} — {entry.companyEnd}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {entry.tools.map((tool) => (
                    <span
                      key={tool.name}
                      className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
