import { type FC, type PropsWithChildren, useRef } from 'react';

import gsap from 'gsap';
import { useLenis } from 'lenis/react';
import { useLocation } from 'react-router';
import { SwitchTransition, Transition } from 'react-transition-group';

export const PageTransition: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const nodeRef = useRef(null);
  const lenis = useLenis();

  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={200}
        nodeRef={nodeRef}
        onEnter={() => {
          gsap.set(nodeRef.current, {
            y: 40,
            opacity: 0,
          });
          gsap
            .timeline({
              paused: true,
            })
            .to(nodeRef.current, {
              y: 0,
              opacity: 1,
              duration: 0.3,
              ease: 'sine.out',
            })
            .play();
        }}
        onExit={() => {
          gsap
            .timeline({
              paused: true,
            })
            .to(nodeRef.current, {
              y: 40,
              opacity: 0,
              duration: 0.2,
              ease: 'sine.in',
              onComplete: () => {
                lenis?.scrollTo(0, {
                  duration: 0.01,
                });
              },
            })
            .play();
        }}
      >
        <div ref={nodeRef} style={{ height: '100%' }}>
          {children}
        </div>
      </Transition>
    </SwitchTransition>
  );
};
