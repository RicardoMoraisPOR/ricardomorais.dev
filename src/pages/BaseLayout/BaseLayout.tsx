import DotGrid from '@/pages/BaseLayout/DotGridBackground';
import { HeaderMenu } from '@/pages/BaseLayout/HeaderMenu';
import { Outlet } from 'react-router';

export const BaseLayout = () => {
  return (
    <div className="relative w-full min-h-screen bg-background">
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            WebkitMaskImage:
              'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 80%)',
            maskImage:
              'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 80%)',
          }}
        >
          <DotGrid
            dotSize={2}
            gap={30}
            proximity={150}
            shockRadius={150}
            shockStrength={5}
            resistance={1000}
            returnDuration={0.5}
            className="absolute inset-0"
          />
        </div>
      </div>

      <div className="relative z-10 p-8 sm:p-12 md:p-16 overflow-hidden">
        <HeaderMenu />
        <main className="pt-24">
          <div className="flex min-h-[70vh] flex-col justify-center md:px-6 max-w-5xl mx-auto pt-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
