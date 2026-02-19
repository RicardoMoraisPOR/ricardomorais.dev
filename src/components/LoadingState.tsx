import { Spinner } from './ui/spinner';

type LoadingStateProps = {
  isLoading: boolean;
};

export const LoadingState = ({ isLoading }: LoadingStateProps) => {
  return isLoading ? (
    <span className="flex justify-center items-center opacity-100 animate-fadeOut text-muted text-sm gap-2">
      <Spinner /> Loading...
    </span>
  ) : null;
};
