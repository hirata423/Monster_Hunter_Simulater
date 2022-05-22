// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = {
//  nextConfig
// };

const urlPrefix = process.env.URL_PREFIX ? "/" + process.env.URL_PREFIX : "";

module.export = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
};
