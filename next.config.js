/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "uk"],
    defaultLocale: "en",
    localeDetection: true,
  },
};

module.exports = nextConfig;
