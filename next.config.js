const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      // {
      //   protocol: "https",
      //   hostname: "nick-sweet-treats-server-production.up.railway.app",
      // },
      {
        protocol: "https",
        hostname:"nick-sweet-treats-server.s3.us-east-2.amazonaws.com",
      },
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))

module.exports = nextConfig
