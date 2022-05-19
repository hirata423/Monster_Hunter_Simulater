/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  assetPrefix: process.env.NODE_ENV === "production" ? "/hlsjs-playground" : "",
};
