import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Hello World';

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'black',
        color: 'white',
        fontSize: 64,
        fontFamily: 'sans-serif',
        textAlign: 'center',
        padding: '40px',
      }}
    >
      {title}
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
