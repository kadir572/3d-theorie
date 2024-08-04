import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const links = [
    {
      url: 'https://theorie.blyze.ch',
      lastModified: new Date(),
    },
    {
      url: 'https://theorie.blyze.ch/about',
      lastModified: new Date(),
    },
    {
      url: 'https://theorie.blyze.ch/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://theorie.blyze.ch/imprint',
      lastModified: new Date(),
    },
    {
      url: 'https://theorie.blyze.ch/privacy-policy',
      lastModified: new Date(),
    },
  ]
  return links
}
