import { useRef } from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';

type SectionImageProps = {
  image: string;
  imageAlt: string;
};

type SectionTextProps = {
  title: string;
  texts: Array<string>;
};

type SectionAnimationProps = {
  textSide: SectionTextProps;
  imageSide: SectionImageProps;
  isTextFirst?: boolean;
  animationDelay?: number;
};

export const SectionAnimation = ({
  textSide,
  imageSide,
  isTextFirst = true,
  animationDelay = 0,
}: SectionAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isStackedLayout = useMediaQuery({ breakpoint: 'md', type: 'max' });

  useGSAP(() => {
    if (containerRef.current) {
      const items = containerRef.current.children;

      const tl = gsap.timeline();

      tl.fromTo(
        items[0],
        { x: -160, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: animationDelay,
          ease: 'expo.out',
        },
      );

      tl.fromTo(
        items[1],
        { x: 160, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
        },
        '-=1',
      );
    }
  });

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center"
    >
      {isTextFirst || isStackedLayout ? (
        <>
          <TextSideComponent {...textSide} isTextFirst />
          <ImageSideComponent {...imageSide} />
        </>
      ) : (
        <>
          <ImageSideComponent {...imageSide} />
          <TextSideComponent {...textSide} />
        </>
      )}
    </div>
  );
};

const TextSideComponent = ({
  texts,
  title,
  isTextFirst,
}: SectionTextProps & Pick<SectionAnimationProps, 'isTextFirst'>) => (
  <div className="flex flex-col gap-4">
    <h2
      className={clsx(
        'text-2xl font-semibold text-foreground',
        !isTextFirst && 'text-right',
      )}
    >
      {title}
    </h2>
    {texts.map((text, index) => (
      <p
        key={index}
        className={clsx(
          'text-base text-muted-foreground leading-relaxed',
          !isTextFirst && 'text-right',
        )}
      >
        {text}
      </p>
    ))}
  </div>
);

const ImageSideComponent = ({ image, imageAlt }: SectionImageProps) => (
  <div className="relative aspect-16/10 overflow-hidden rounded-lg">
    <img
      src={image}
      alt={imageAlt}
      className="w-full h-full object-cover"
      loading="lazy"
      decoding="async"
    />
  </div>
);
