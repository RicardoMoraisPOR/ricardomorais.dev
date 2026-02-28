import { fetchChessDotComPlayerHighestStat } from '@/api/FetchRequests';
import { GithubSVG } from '@/assets/GithubSVG';
import { LinkedinSVG } from '@/assets/LinkedinSVG';
import { StyledLink } from '@/components/LinkHover';
import { PageTitle } from '@/components/PageTitle';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { useHead } from '@unhead/react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router';

import { SectionAnimation } from './SectionAnimation';
import { WorkExperience } from './WorkExperience';

export const AboutPage = () => {
  useHead({
    title: 'About | Ricardo Morais',
    meta: [
      {
        name: 'description',
        content:
          "I'm a Software Engineer focused on front-end development, specialized in React and TypeScript.",
      },
      { property: 'og:title', content: 'About | Ricardo Morais' },

      {
        name: 'twitter:description',
        content:
          "I'm a Software Engineer focused on front-end development, specialized in React and TypeScript.",
      },
      { name: 'twitter:title', content: 'About | Ricardo Morais' },
    ],
  });

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const getYearsDifference = (dateFrom: Date) => {
    const today = new Date();
    let diference = today.getFullYear() - dateFrom.getFullYear();
    const monthDifference = today.getMonth() - dateFrom.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < dateFrom.getDate())
    ) {
      diference--;
    }

    return diference;
  };

  const { data: chessRating, isLoading } = useQuery({
    queryKey: ['leaderboard', 'tactics', 'PT', 'top50'],
    queryFn: fetchChessDotComPlayerHighestStat,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return (
    <>
      <section className="flex flex-col gap-16">
        <PageTitle
          brief={`I'm a ${getYearsDifference(new Date(1996, 0, 18))}-year-old Software Engineer focused on front-end development,
            specialized in React and TypeScript.`}
          page="About"
          title="Hello there!"
          ExtraContent={
            <div className="flex gap-2">
              <Button asChild variant={'outline'} size="icon">
                <Link
                  to="https://github.com/RicardoMoraisPOR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubSVG />
                </Link>
              </Button>
              <Button asChild variant={'outline'} size="icon">
                <Link
                  to="https://www.linkedin.com/in/ricardo-dias-morais/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinSVG />
                </Link>
              </Button>
            </div>
          }
        />
        <div className="flex flex-col gap-16">
          <SectionAnimation
            textSide={{
              title: 'Who am I',
              texts: [
                'My name is Ricardo Morais and I was born in Lisbon, Portugal.',
                'Now living in the island of Madeira, a place I fell in love with and also met my wonderful wife.',
                'Proud owner of a dog, cat, parrot and various exotic fish!',
              ],
            }}
            imageSide={{
              image: '/images/me.jpeg',
              imageAlt: 'Ricardo Morais posing with mountains behind it',
            }}
          />

          <SectionAnimation
            isTextFirst={false}
            animationDelay={0.1}
            textSide={{
              title: 'My Journey',
              texts: [
                'I began my coding career in 2015 when I enrolled in a 3-year CTE in Computer Systems Management and Programming.',
                `I have ${getYearsDifference(new Date(2018, 6, 1))}+ years of
                professional experience. Throughout my career, I've worked in
                both mobile and web development, contributing to projects for
                major companies both nationally and internationally.`,
              ],
            }}
            imageSide={{
              image: '/images/rubber-duck.png',
              imageAlt: 'A yellow rubber duck sit in a wooden desk',
            }}
          />

          <SectionAnimation
            animationDelay={0.2}
            textSide={{
              title: 'Outside Work',
              texts: [
                'Outside of work, I am generally quiet by nature, but I make sure to throw a couple of jokes here and there.',
                <>
                  In my free time, I mod retro consoles, maintain aquariums, and
                  play chess, I’m currently ranked in the{' '}
                  <StyledLink
                    to="https://www.chess.com/leaderboard/tactics?country=PT"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Top 50 leaderboard
                  </StyledLink>{' '}
                  in Portugal for Chess.com tactics (puzzle solving) with a
                  highest rating of{' '}
                  <StyledLink
                    to="https://www.chess.com/member/ricardodiasmorais/stats/puzzles"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {isLoading ? 'Loading...' : <>{chessRating} ELO</>}
                  </StyledLink>
                  .
                </>,
                'Vivid fan of Pokémon.',
              ],
            }}
            imageSide={{
              image: '/images/aquarium.jpeg',
              imageAlt: 'Aquarium viewed from the side',
            }}
          />
        </div>
      </section>
      <div className="h-px w-full bg-border my-16" role="separator" />
      <div ref={ref}>
        <WorkExperience inView={inView} />
      </div>
    </>
  );
};
