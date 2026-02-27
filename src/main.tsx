import { StrictMode } from 'react';

import { App } from '@/App.tsx';
import '@/index.css';
import { ThemeProvider } from '@/lib/ThemeProvider.tsx';
import { useGSAP } from '@gsap/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UnheadProvider, createHead } from '@unhead/react/client';
import { Analytics } from '@vercel/analytics/react';
import gsap from 'gsap';
import { ReactLenis } from 'lenis/react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

gsap.registerPlugin(useGSAP);
const head = createHead();
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UnheadProvider head={head}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <Analytics />
            <ReactLenis root>
              <App />
            </ReactLenis>
          </ThemeProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </UnheadProvider>
  </StrictMode>,
);
