
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // per URL coerenti (es. /about/ invece di /about)
  images: {
    domains: ['studiojable.com'], // se usi <Image> per immagini esterne
  }
}

module.exports = nextConfig

