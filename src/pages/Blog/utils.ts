export const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const STALE_TIME = 1000 * 60 * 5;
export const GARBAGE_COLLECTED_TIME = 1000 * 60 * 30;
