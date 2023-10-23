const rehypePrettyCode = require('rehype-pretty-code');
const withMDX = require('@next/mdx')({
  options: {
    rehypePlugins:[
      rehypePrettyCode
    ]
  }
})
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
module.exports = withMDX(nextConfig);
