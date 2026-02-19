import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

// eslint-disable-next-line react-refresh/only-export-components
export default function (req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Default Title';

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        background: '#111', // visible background
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 60,
        fontFamily: 'sans-serif',
        padding: '30px',
        textAlign: 'center',
      }}
    >
      {title}
    </div>,
    {
      width: 1200,
      height: 630,
      debug: true,
    },
  );
}
