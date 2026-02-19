export interface UsesItem {
  name: string;
  description: Array<string> | string;
}

export interface TechItem {
  name: string;
  description: string;
}

export interface UsesCategory {
  label: string;
  title: string;
  items: Array<UsesItem>;
}

export const techStack: Array<string> = [
  'Apollo Client',
  'Ant Design',
  'ASP.NET core',
  'Azure',
  'Azure Pipelines',
  'Babel',
  'Bash/Powershell',
  'Blazor',
  'Bruno',
  'Bun',
  'CSS',
  'C#',
  'Cursor',
  'Cypress',
  'D3.js',
  'DataDog',
  'Discord API',
  'Docker',
  'Dotenv',
  'Eslint',
  'esbuild',
  'Figma',
  'Firebase',
  'Formik',
  'Framer Motion',
  'Github',
  'Github Actions',
  'Git',
  'Gitlab',
  'GSAP',
  'GraphQL',
  'Hashnode',
  'HTML',
  'Husky',
  'Insomnia',
  'I18next',
  'Jest',
  'Jquery',
  'JSON',
  'JSS',
  'Leaflet',
  'Linear',
  'Linux',
  'Lottie',
  'Lodash',
  'Mapbox',
  'MDX',
  'MUI',
  'MS Teams',
  'MySQL',
  'Next.js',
  'Node.js',
  'npm',
  'Notion',
  'OpenAI',
  'PHP',
  'Postman',
  'Prettier',
  'pnpm',
  'Radix UI',
  'React',
  'React Hook Form',
  'React Native',
  'React Router',
  'Rollup',
  'Shadcnui',
  'SQLite',
  'Stitches',
  'Storyblok',
  'Storybook',
  'Tailwind',
  'Tanstack Query',
  'Tanstack Table',
  'Three.js',
  'Testing Library',
  'Turborepo',
  'Typescript',
  'V0',
  'Vercel',
  'Vite',
  'Vue.js',
  'VSCode',
  'Visual Studio',
  'Webpack',
  'Windows',
  'Wordpress',
  'yarn',
  'ZOD',
  'Zustand',
];

export const development: UsesCategory = {
  label: 'Development',
  title: 'Software',
  items: [
    {
      name: 'VS Code',
      description:
        'Primary code editor, with a minimal setup and a handful of extensions.',
    },
    {
      name: 'Windows Terminal + Bash',
      description: 'The default WT app with oh-my-bash framework.',
    },
    {
      name: 'Vivaldi Browser',
      description:
        'Highly customizable web browser, configured to have the most focus setup possible.',
    },
    {
      name: 'Figma',
      description:
        'For design and prototyping UI/UX work. Also to create/edit new icons.',
    },
    {
      name: 'Bruno',
      description:
        'Minimal open-source API client for testing and managing API requests locally.',
    },
    {
      name: 'Github',
      description: 'Code hosting and versioning.',
    },
    {
      name: 'GoDaddy',
      description: 'Manage domains and basic web hosting.',
    },
    {
      name: 'Vercel',
      description: 'Cloud platform for project build and deploying.',
    },
    {
      name: 'V0',
      description:
        'AI tool for generating UI code, mostly use it for UI inspiration.',
    },
    {
      name: 'Notion',
      description: "Notes, organizing ideas and daily TODO's.",
    },
  ],
};

export const officeSetup: UsesCategory = {
  label: 'Office',
  title: 'Setup',
  items: [
    {
      name: 'Custom build PC',
      description:
        'AMD Ryzen 7 3700X, NVIDIA GeForce GTX 1660, 16gb DDR4 RAM, 500gb m.2 ssd.',
    },
    {
      name: "2 HP Omen Monitors 24'' / 1 ms / 165 Hz",
      description:
        'I prefer using two monitors over an ultrawide. One directly in front and the other side by side at a 30° angle.',
    },
    {
      name: 'Akko 5075',
      description: 'Mechanical keyboard with Silver Pro switches.',
    },
    {
      name: 'Logitech LIFT',
      description: 'Ergonomic wireless mouse.',
    },
    {
      name: 'Sennheiser HD 450',
      description: 'Noise-canceling headphones for deep focus.',
    },
    {
      name: 'Wavlink UMD04',
      description: 'USB-C 4k triple display MST dock.',
    },
    {
      name: 'Custom build wooden desk',
      description:
        '4m resin-coated wooden surface supported by steel beams. Shared with wife setup and Home Server',
    },
    { name: 'Naspaluro', description: 'Ergonomic office chair.' },
    { name: 'Yellow Rubber Duck', description: 'Very important.' },
  ],
};

export const miscellaneous: UsesCategory = {
  label: 'Miscellaneous',
  title: 'Stuff',
  items: [
    {
      name: 'Consoles / Retro / Modding',
      description: [
        'Nintendo Switch with custom joycons (pink & clear purple themes);',
        '2 Retro & Modded Gameboy Colors (PKM Yellow & Kiwi themes);',
        'Retroid Pocket Classic PKM Yellow theme;',
        '2 modded XBOX controllers (pink & clear purple themes).',
      ],
    },
    {
      name: 'Chess',
      description:
        '45x45 wooden board with 9.5 King height pieces that I have since i was 10.',
    },
    {
      name: 'Aquarium',
      description: [
        '60X25X40 60L freshwater aquarium with black rims, aquascaped with Biotope in mind.',
        'Hardscaped with japanese volcanic soil + yellow Aqua Della sand, 1 main center piece driftwood with dragon stones + vulcanic stones.',
        'Multiple kuhli loachs, guppies and trumpet snails.',
      ],
    },
    {
      name: 'Pokémon',
      description: [
        'Multiple Figurines, cards and collectables since I was 3, but the most notable ones for each category are:',
        'MEGA lego motion Eevee set',
        'Mint Ancient Mew PTCG card',
        'A near completed johto magnet binder set.',
      ],
    },
    {
      name: 'Google Pixel 10',
      description: 'Main mobile device.',
    },
    {
      name: 'Home Server',
      description:
        'Old Acer laptop with Ubuntu Server + CasaOS with Jellyfin, Home Assistant, Syncthing, Navidrome, RomMm and Immich.',
    },
    {
      name: 'Spotify',
      description: 'Music streaming.',
    },
  ],
};
