import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const LogoTitleAnimation = () => {
  const svgRef = useRef<SVGPathElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: 'circ.inOut',
        },
      );
    }
  });

  useGSAP(() => {
    if (!svgRef.current) return;

    const items = svgRef.current.children;

    const tl = gsap.timeline();

    tl.fromTo(
      items[0],
      { x: 160 },
      {
        x: 0,
        delay: 0.8,
        duration: 0.7,
        ease: 'circ.out',
      },
    );

    tl.fromTo(
      items[3],
      { x: -160, y: -160 },
      {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'expo.out',
      },
      '+=0.2',
    );

    tl.fromTo(
      items[4],
      { x: -80, y: -80 },
      {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'expo.out',
      },
      '-=0.65',
    );

    tl.fromTo(
      items[5],
      { y: -40 },
      {
        y: 0,
        duration: 0.9,
        ease: 'expo.out',
      },
      '-=0.65',
    );

    tl.fromTo(
      items[2],
      { x: -80, y: 80 },
      {
        x: 0,
        y: 0,
        duration: 0.9,
        ease: 'expo.out',
      },
      '-=1',
    );

    tl.fromTo(
      items[1],
      { y: 60 },
      {
        y: 0,
        duration: 0.6,
        ease: 'expo.out',
      },
      '-=0.9',
    );
  });

  return (
    <div className="flex items-center md:gap-3 gap-5 flex-col md:flex-row">
      <svg
        height="50"
        viewBox="0 0 203 236"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_517_64"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="203"
          height="236"
        >
          <path
            d="M0 16C0 7.16344 7.16344 0 16 0H129C169.869 0 203 33.1309 203 74V236H16C7.16344 236 0 228.837 0 220V16Z"
            fill="#FFF"
          />
        </mask>
        <g mask="url(#mask0_517_64)" ref={svgRef}>
          <path
            d="M146.5 141.866L239.5 235.5H163.5L72 144L187 29L222.5 63.5L146.5 141.866Z"
            className="fill-primary"
          />
          <path
            d="M108.682 197L148.682 236.25H69L108.682 197Z"
            className="fill-primary"
            fillOpacity="0.8"
          />
          <path
            d="M100.282 188.5L-103.5 387.59L-130 346.5L64 152.5L100.282 188.5Z"
            className="fill-primary"
            fillOpacity="0.8"
          />
          <path
            d="M204.5 -4.00001L-1 201.5L-27.5 160.41L159 -26.09L204.5 -4.00001Z"
            className="fill-primary"
          />
          <path
            d="M160 -41.91L-45.5 163.59L-72 122.5L114.5 -64L160 -41.91Z"
            className="fill-primary"
            fillOpacity="0.8"
          />
          <path
            d="M113 -73.91L-92.5 131.59L-119 90.5L67.5 -96L113 -73.91Z"
            className="fill-primary"
            fillOpacity="0.8"
          />
        </g>
      </svg>
      <h1
        ref={titleRef}
        className="md:text-5xl text-3xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance"
      >
        Ricardo Morais
      </h1>
    </div>
  );
};
