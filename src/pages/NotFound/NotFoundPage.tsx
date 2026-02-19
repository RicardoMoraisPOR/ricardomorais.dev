import TextPressure from '@/pages/NotFound/TextPressure';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export const NotFoundPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <div className="w-full md:w-1/2">
        <TextPressure text="404" />
        <TextPressure text="Page not found" />
      </div>
      <Link
        to="/"
        className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground w-fit"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
        Back to Home
      </Link>
    </div>
  );
};
