import type { ComponentPropsWithoutRef } from 'react';

import { generateId } from '@/utils/utils';

type PProps = ComponentPropsWithoutRef<'p'>;

export const TextElement = (props: PProps) => {
  return (
    <p
      className="text-base text-muted-foreground leading-relaxed my-2"
      {...props}
    />
  );
};

type H1Props = ComponentPropsWithoutRef<'h1'>;

export const TitleElement = ({ children, ...props }: H1Props) => {
  const id = typeof children === 'string' ? generateId(children) : undefined;
  return (
    <h1 id={id} className="text-3xl mb-2 mt-8" {...props}>
      {children}
    </h1>
  );
};

type H2Props = ComponentPropsWithoutRef<'h2'>;

export const SubTitleElement = ({ children, ...props }: H2Props) => {
  const id = typeof children === 'string' ? generateId(children) : undefined;
  return (
    <h2 id={id} className="text-xl mb-2 mt-8" {...props}>
      {children}
    </h2>
  );
};

type H3Props = ComponentPropsWithoutRef<'h3'>;

export const SectionSubTitleElement = ({ children, ...props }: H3Props) => {
  const id = typeof children === 'string' ? generateId(children) : undefined;
  return (
    <h3 id={id} className="text-lg mb-2 mt-8" {...props}>
      {children}
    </h3>
  );
};

type ULProps = ComponentPropsWithoutRef<'ul'>;

export const ListElement = (props: ULProps) => {
  return (
    <ul
      className="list-disc pl-6 space-y-2 text-muted-foreground py-2 ml-2"
      {...props}
    />
  );
};

type OLProps = ComponentPropsWithoutRef<'ol'>;

export const OrderedListElement = (props: OLProps) => {
  return (
    <ol
      className="list-decimal pl-6 space-y-2 text-muted-foreground py-2 ml-2"
      {...props}
    />
  );
};

type AnchorProps = ComponentPropsWithoutRef<'a'>;

export const AnchorElement = ({ href, children, ...props }: AnchorProps) => {
  const isExternal = href?.startsWith('http');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="underline decoration-primary/30 underline-offset-4 text-muted-foreground hover:decoration-foreground transition-colors hover:text-foreground"
      {...props}
    >
      {children}
    </a>
  );
};

type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

export const BlockquoteElement = (props: BlockquoteProps) => {
  return (
    <blockquote
      className="
        my-6
        rounded-lg
        border-l-4 border-b-muted
        bg-muted/30
        px-3 py-4
        text-muted-foreground
        italic
      "
      {...props}
    />
  );
};

type HrProps = ComponentPropsWithoutRef<'hr'>;

export const SeparatorElement = (props: HrProps) => {
  return (
    <hr
      className="h-px w-full bg-border mt-5 mb-10"
      role="separator"
      {...props}
    />
  );
};

type ImgProps = ComponentPropsWithoutRef<'img'>;

export const ImageElement = (props: ImgProps) => {
  return (
    <img
      className="mx-auto my-4 max-w-full rounded-lg"
      {...props}
      loading="lazy"
      decoding="async"
    />
  );
};
