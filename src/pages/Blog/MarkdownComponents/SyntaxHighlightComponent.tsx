import { type ComponentPropsWithoutRef, useState } from 'react';

import { useTheme } from '@/hooks/useTheme';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  atelierForestDark,
  atelierForestLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

type CodeProps = ComponentPropsWithoutRef<'code'> & {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const CodeElement = ({
  className,
  children,
  // prevent any outside style from being passed down
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  style,
  ...rest
}: CodeProps) => {
  const { darkMode } = useTheme();
  const [copied, setCopied] = useState(false);

  const match = /language-(\w+)/.exec(className || '');
  const codeString = String(children).replace(/\n$/, '');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return match ? (
    <div className="relative my-4">
      <button
        onClick={handleCopy}
        className="absolute right-3 top-3 z-10 rounded-md border border-border bg-muted px-2 py-1 text-xs font-medium text-muted-foreground transition hover:bg-muted/80"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>

      <SyntaxHighlighter
        customStyle={{
          borderRadius: '1rem',
          padding: '1rem',
          margin: 0,
        }}
        PreTag="div"
        language={match[1]}
        style={darkMode ? atelierForestDark : atelierForestLight}
        {...rest}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code
      {...rest}
      className="rounded bg-muted px-1.5 py-0.5 font-mono text-foreground"
    >
      {children}
    </code>
  );
};
