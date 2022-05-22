/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = {
//  nextConfig
// };

const urlPrefix = process.env.URL_PREFIX ? "/" + process.env.URL_PREFIX : "";

module.exports = {
  nextConfig,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
};
