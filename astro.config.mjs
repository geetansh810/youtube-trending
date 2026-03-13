import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: "https://geetansh810.github.io",
  base: '/youtube-trending',
  vite: {
    define: {
      'import.meta.env.PUBLIC_YOUTUBE_API_KEY': JSON.stringify(process.env.PUBLIC_YOUTUBE_API_KEY || ''),
    }
  }
});
