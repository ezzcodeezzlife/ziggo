/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'it', 'es', 'nl', 'pt', 'el', 'hr', 'cs', 'da', 'et', 'fi', 'fy'],
  },
};

module.exports = nextConfig;
