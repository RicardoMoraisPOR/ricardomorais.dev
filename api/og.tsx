import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        fontSize: 40,
        color: 'black',
        background: 'white',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <svg
        width="203"
        height="236"
        viewBox="0 0 203 236"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_517_64"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="203"
          height="236"
        >
          <path
            d="M0 16C0 7.16344 7.16344 0 16 0H129C169.869 0 203 33.1309 203 74V236H16C7.16344 236 0 228.837 0 220V16Z"
            fill="#D9D9D9"
          />
        </mask>
        <g mask="url(#mask0_517_64)">
          <path
            d="M146.5 141.866L239.5 235.5H163.5L72 144L187 29L222.5 63.5L146.5 141.866Z"
            fill="#171717"
          />
          <path
            d="M108.682 197L148.682 236.25H69L108.682 197Z"
            fill="#171717"
            fill-opacity="0.8"
          />
          <path
            d="M100.282 188.5L-103.5 387.59L-130 346.5L64 152.5L100.282 188.5Z"
            fill="#171717"
            fill-opacity="0.8"
          />
          <path
            d="M204.5 -4.00001L-1 201.5L-27.5 160.41L159 -26.09L204.5 -4.00001Z"
            fill="#171717"
          />
          <path
            d="M160 -41.91L-45.5 163.59L-72 122.5L114.5 -64L160 -41.91Z"
            fill="#171717"
            fill-opacity="0.8"
          />
          <path
            d="M113 -73.91L-92.5 131.59L-119 90.5L67.5 -96L113 -73.91Z"
            fill="#171717"
            fill-opacity="0.8"
          />
        </g>
      </svg>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
