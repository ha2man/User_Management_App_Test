import type { Config } from 'tailwindcss'

const config: Config = {
  prefix: 'tw-',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      greenDark: '#217346',
      greenNormal: '#318356',
      greyDark: '#2F2F2F',
      greyNormal: '#3F3F3F',
      greyLight: '#4F4F4F',
      greyWhite: '#5F5F5F',
      greyNormalDay: '#AFAFAF',
      greyDay: '#CFCFCF',
    },
    screens: {
      "3xs": { min: "400.98px" },
      "2xs": { min: "540.98px" },
      xs: { min: "740.98px" },
      sm: { min: "780.98px" },
      md: { min: "1024.98px" },
      mdH: { raw: "(max-height: 750.98px)" },
      lg: { min: "1280.98px" },
      xl: { min: "1920.98px" },
      "2xl": { min: "2560px" }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
