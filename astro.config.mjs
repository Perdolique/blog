// @ts-check
import { defineConfig } from 'astro/config'
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

  markdown: {
    shikiConfig: {
      themes: {
        light: 'one-light',
        dark: 'one-dark-pro'
      }
    }
  }
})
