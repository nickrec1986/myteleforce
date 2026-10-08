// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://myteleforce.com',
  output: 'static',
  // GitHub Pages 301s slashless directory URLs to the slashed form. Keep
  // Astro, the sitemap, and <link rel="canonical"> on that 200 URL.
  trailingSlash: 'always',
  redirects: {
    '/outsourced-sdr-team': '/sdr-bdr/',
    '/outsourced-saas-support': '/customer-service/',
    '/nearshore-customer-service-mexico-colombia': '/customer-service/',
    '/nearshore-bilingual-support-lenders': '/customer-service/',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thanks') && !page.includes('/thankyou'),
    }),
  ],
});
