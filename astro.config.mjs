import { defineConfig } from 'astro/config';

const defaultSite = 'https://FacCienciasUABJO.github.io';
const defaultBase = '/landing-computacion';

const site = process.env.SITE_URL || defaultSite;
const configuredBase = process.env.BASE_PATH ?? defaultBase;
const base = configuredBase.trim() === '' ? '/' : configuredBase;

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
});
