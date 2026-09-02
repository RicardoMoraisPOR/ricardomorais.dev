import { ImageResponse } from '@vercel/og';

import { OgLogoMark } from '../src/lib/ogLogo';

const BACKGROUND = '#0a0a0a';
const FOREGROUND = '#fafafa';
const MUTED_FOREGROUND = '#a3a3a3';
const BORDER = 'rgba(255, 255, 255, 0.14)';

export default async function handler(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = (searchParams.get('title') ?? 'Ricardo Morais — Blog').slice(
    0,
    140,
  );
  const tags = searchParams
    .getAll('tag')
    .filter(Boolean)
    .map((tag) => tag.slice(0, 40));
  const readTime = searchParams.get('readTime')?.slice(0, 10);

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        padding: '72px',
        backgroundColor: BACKGROUND,
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex' }}>
        <OgLogoMark color={FOREGROUND} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div
          style={{
            display: 'flex',
            fontSize: 60,
            fontWeight: 700,
            color: FOREGROUND,
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>
        {tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  display: 'flex',
                  padding: '5px 14px',
                  borderRadius: 999,
                  border: `1px solid ${BORDER}`,
                  color: MUTED_FOREGROUND,
                  fontSize: 16,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ display: 'flex', fontSize: 24, fontWeight: 600 }}>
          <span style={{ color: FOREGROUND }}>ricardomorais</span>
          <span style={{ color: MUTED_FOREGROUND }}>.dev</span>
        </span>
        {readTime && (
          <span style={{ fontSize: 24, color: MUTED_FOREGROUND }}>
            {readTime} min read
          </span>
        )}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
