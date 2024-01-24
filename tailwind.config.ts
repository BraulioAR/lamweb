import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'insp': 'url(\'/inspiracion1full.webp\')',
        'insp2': 'url(\'/inspiracion2full.webp\')',
        'insp3': 'url(\'/inspiracion3full.webp\')',
        'insp4': 'url(\'/inspiracion4full.webp\')',
        'insp5': 'url(\'/inspiracion5full.webp\')',
        'insp6': 'url(\'/inspiracion6full.webp\')',
        'insp7': 'url(\'/inspiracion7full.webp\')',
        'insp8': 'url(\'/inspiracion8full.webp\')',
        'insp9': 'url(\'/inspiracion9full.webp\')',
        'maggie-portfolio': 'url(\'/maggie-portfolio.webp\')',
        'fotografia-portfolio': 'url(\'/fotografia-portfolio.webp\')',
        'fraganciaspena-portfolio': 'url(\'/fraganciaspena-portfolio.webp\')',
        'symmetryc-portfolio': 'url(\'/symmetryc-portfolio.webp\')',
        'boho-portfolio': 'url(\'/boho-portfolio.webp\')',
        'estevez-portfolio': 'url(\'/estevez-portfolio.webp\')',
        'faf1': 'url(\'/freshandfree1.webp\')',
       
      },
      boxShadow: {
        'custom': '0 0px 15px rgba(195, 218, 254, 1)',
    },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
    require('tailwindcss-animated')
  ],
}
export default config
