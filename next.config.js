const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["domeniclabbate.com"],
  },
};

module.exports = withContentlayer(nextConfig);
