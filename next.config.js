/** @type {import('next').NextConfig} */
// set url prefix for the static resource, useful in deploying to the custom domain or cdn
let assetPrefix = ``
let basePath = ``

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
    path: assetPrefix // Ensure images.path matches assetPrefix
  }
}

module.exports = nextConfig