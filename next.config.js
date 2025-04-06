/** @type {import('next').NextConfig} */
// set url prefix for the static resource, useful in deploying to the custom domain or cdn
let assetPrefix = `/web/April-birthday/out`
let basePath = `/web/April-birthday/out`

const isGithubActions = process.env.GITHUB_ACTIONS || false
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '') // remove the github owner
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  assetPrefix: assetPrefix, // Use the dynamic value
  basePath: basePath,       // Use the dynamic value
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    assetPrefix: assetPrefix, // Expose assetPrefix to the client
  },
}

module.exports = nextConfig