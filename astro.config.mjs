// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import mdx from '@astrojs/mdx'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    icon()
  ],

  devToolbar: {
    enabled: false
  },

  fonts: [{
    name: 'Inter',
    provider: fontProviders.fontsource(),
    weights: ['100 900'],
    cssVariable: '--font-inter'
  }],

  scopedStyleStrategy: 'class',

  markdown: {
    shikiConfig: {
      themes: {
        light: 'one-light',
        dark: 'one-dark-pro'
      }
    }
  }
})
