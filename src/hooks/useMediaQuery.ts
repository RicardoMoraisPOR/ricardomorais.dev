import { useLayoutEffect, useState } from 'react';

type Breakpoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type UseMediaQueryOptions = {
  breakpoint: Breakpoints;
  type?: 'min' | 'max';
};

const breakpointMeasurements: Record<Breakpoints, string> = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export function useMediaQuery({
  breakpoint,
  type,
}: UseMediaQueryOptions): boolean {
  const query = `(${type || 'min'}-width: ${breakpointMeasurements[breakpoint]})`;

  const getMatches = (query: string): boolean => {
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  // Handles the change event of the media query.
  function handleChange() {
    setMatches(getMatches(query));
  }

  useLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Use deprecated `addListener` and `removeListener` to support Safari < 14 (#135)
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}
