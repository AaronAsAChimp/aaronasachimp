import rehypePrettyCode from 'rehype-pretty-code';
import remarkFrontmatter from 'remark-frontmatter';
import mdx from '@next/mdx';

const withMDX = mdx({
  options: {
    remarkPlugins: [
      remarkFrontmatter
    ],
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
 
export default withMDX(nextConfig);
