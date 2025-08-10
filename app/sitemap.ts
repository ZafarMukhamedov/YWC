import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://example.com/ru',
      lastModified: new Date()
    },
    {
      url: 'https://example.com/uz',
      lastModified: new Date()
    },
    {
      url: 'https://example.com/en',
      lastModified: new Date()
    }
  ];
}
