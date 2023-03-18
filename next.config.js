/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  env: {
    userName: 'GuilhermeCCunha', //GitHub
  },
  
}

module.exports = nextConfig