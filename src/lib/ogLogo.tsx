type OgLogoMarkProps = {
  color: string;
};

export const OgLogoMark = ({ color }: OgLogoMarkProps) => (
  <svg width="48" height="56" viewBox="0 0 203 236" fill="none">
    <mask
      id="og-logo-mask"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={203}
      height={236}
    >
      <path
        d="M0 16C0 7.16344 7.16344 0 16 0H129C169.869 0 203 33.1309 203 74V236H16C7.16344 236 0 228.837 0 220V16Z"
        fill="#D9D9D9"
      />
    </mask>
    <g mask="url(#og-logo-mask)">
      <path
        d="M146.5 141.866L239.5 235.5H163.5L72 144L187 29L222.5 63.5L146.5 141.866Z"
        fill={color}
      />
      <path
        d="M108.682 197L148.682 236.25H69L108.682 197Z"
        fill={color}
        fillOpacity={0.8}
      />
      <path
        d="M100.282 188.5L-103.5 387.59L-130 346.5L64 152.5L100.282 188.5Z"
        fill={color}
        fillOpacity={0.8}
      />
      <path
        d="M204.5 -4.00001L-1 201.5L-27.5 160.41L159 -26.09L204.5 -4.00001Z"
        fill={color}
      />
      <path
        d="M160 -41.91L-45.5 163.59L-72 122.5L114.5 -64L160 -41.91Z"
        fill={color}
        fillOpacity={0.8}
      />
      <path
        d="M113 -73.91L-92.5 131.59L-119 90.5L67.5 -96L113 -73.91Z"
        fill={color}
        fillOpacity={0.8}
      />
    </g>
  </svg>
);
