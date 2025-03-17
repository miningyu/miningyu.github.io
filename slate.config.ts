/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://slate-blog-demo.vercel.app',
  avatar: '/avatar.png',
  title: 'Mnngy Blog',
  description: '안녕하세요. Mnngy의 블로그입니다. 웹 개발에 관심이 있습니다. 😌',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: `© Mnngy's blog 2025 / Based on Slate Design template`,
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/miningyu'
    },
]
});
