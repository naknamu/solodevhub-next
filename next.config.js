/** @type {import('next').NextConfig} */

const removeImports = require('next-remove-imports')();

module.exports = removeImports({
  reactStrictMode: true,
  images: {
    domains: ['pub-9c57eec207bf46e8acf2f916d8ea29e7.r2.dev'],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
});
