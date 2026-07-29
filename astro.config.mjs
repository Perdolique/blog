// @ts-check
import { defineConfig, fontProviders, logHandlers } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://perd.dev',

  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',

    routing: {
      prefixDefaultLocale: false
    }
  },

  integrations: [
    mdx(),
    icon(),
    sitemap()
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
  },

  logger: logHandlers.json()
})
