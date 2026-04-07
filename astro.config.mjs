import { defineConfig, fontProviders } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: 'Inter',
      provider: fontProviders.google(),
      cssVariable: '--font-inter',
    },
    {
      name: 'Merriweather',
      provider: fontProviders.google(),
      cssVariable: '--font-merriweather',
    }
  ],
})
