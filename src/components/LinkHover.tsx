import { cn } from '@/lib/utils';
import { Link, type LinkProps } from 'react-router';

export const StyledLink: React.FC<LinkProps> = ({
  className = '',
  ...props
}) => {
  return (
    <Link
      className={cn(
        'underline decoration-primary/30 underline-offset-4 text-muted-foreground hover:decoration-foreground transition-colors hover:text-foreground',
        className,
      )}
      {...props}
    />
  );
};
