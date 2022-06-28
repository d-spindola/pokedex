const path = require("path");

const appInfo = {
  APP_NAME: "pokedx",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  env: {
    ...appInfo,
  },
};

module.exports = nextConfig;
