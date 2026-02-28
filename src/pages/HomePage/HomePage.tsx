import { StyledLink } from '@/components/LinkHover';
import { useHead } from '@unhead/react';

import { LogoTitleAnimation } from './LogoTitleAnimation';
import { ToolsAnimation } from './ToolsAnimation';

export const HomePage = () => {
  useHead({
    title: 'Home | Ricardo Morais',
    meta: [
      { property: 'og:title', content: 'Home | Ricardo Morais' },
      { name: 'twitter:title', content: 'Home | Ricardo Morais' },
    ],
  });

  return (
    <div className="w-full">
      <LogoTitleAnimation />
      <div className="mt-8 max-w-2xl">
        <p className="md:text-lg text-md leading-relaxed text-secondary-foreground">
          {"I'm a "}
          <strong className="font-semibold text-foreground">
            Software Engineer
          </strong>
          {', currently working at '}
          <StyledLink
            to="https://www.santander.com/"
            className="font-semibold text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bank Santander
          </StyledLink>
          {
            '. I work with forward-thinking people to design and build clean, high-performant and accessible '
          }
          <strong className="font-semibold text-foreground">
            websites and products
          </strong>
          .
        </p>
      </div>
      <ToolsAnimation />
    </div>
  );
};
