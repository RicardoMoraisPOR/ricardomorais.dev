import type { ComponentPropsWithoutRef } from 'react';

type PProps = ComponentPropsWithoutRef<'p'>;

export const TextElement = (props: PProps) => {
  return (
    <p
      className="text-base text-muted-foreground leading-relaxed mb-0.5"
      {...props}
    />
  );
};

type H1Props = ComponentPropsWithoutRef<'h1'>;

export const TitleElement = (props: H1Props) => {
  return <h1 className="text-3xl mb-2 mt-8" {...props} />;
};

type H2Props = ComponentPropsWithoutRef<'h2'>;

export const SubTitleElement = (props: H2Props) => {
  return <h2 className="text-xl mb-2 mt-8" {...props} />;
};

type ULProps = ComponentPropsWithoutRef<'ul'>;

export const ListElement = (props: ULProps) => {
  return (
    <ul
      className="list-disc pl-6 space-y-2 text-muted-foreground py-2"
      {...props}
    />
  );
};

type OLProps = ComponentPropsWithoutRef<'ol'>;

export const OrderedListElement = (props: OLProps) => {
  return (
    <ol
      className="list-decimal pl-6 space-y-2 text-muted-foreground py-2"
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
      className="text-primary underline underline-offset-4 hover:opacity-80 transition"
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
