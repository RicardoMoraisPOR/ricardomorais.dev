import { useTheme } from '@/hooks/useTheme';
import { Link } from 'react-router';

export const AuthorBio = () => {
  const { darkMode } = useTheme();

  return (
    <Link
      to="/about"
      className="group flex shrink-0 items-center gap-2 whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <img
        src={darkMode ? '/logo-dark-theme.svg' : '/logo-light-theme.svg'}
        alt="Ricardo Morais logo"
        className="h-4 w-4 shrink-0"
      />
      <span>Ricardo Morais</span>
    </Link>
  );
};
