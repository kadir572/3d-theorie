/** @type {import('next').NextConfig} */
const nextConfig = {}

const withNextIntl = require('next-intl/plugin')()

module.exports = withNextIntl({
  ...nextConfig,
  redirects: async () => {
    return [
      // example
      // {
      //   source: '/test',
      //   destination: 'https://mywebsite.com/test',
      //   permanent: true,
    ]
  },
})
