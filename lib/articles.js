import fs from 'fs';
import path from 'path';
import * as matter from 'gray-matter';

async function *getArticleMetadata(articlesPath) {
  const dirs = fs.readdirSync(articlesPath, {encoding: 'utf-8', withFileTypes: true});
  const metadata = [];

  for (const dir of dirs) {
    if (dir.isDirectory()) {
      const mdxPath = path.join(dir.path, dir.name, 'index.mdx');

      if (fs.existsSync(mdxPath)) {
        const article = matter(fs.readFileSync(mdxPath));

        const date = article.data.date ? article.data.date.toISOString() : null;

        yield {
          path: '/articles/' + dir.name,
          date,
          title: article.data.title,
          blurb: article.data.blurb
        };
      }
    }
  }

  return metadata;
}

export async function getAllArticleMetadata(articlesPath) {
  const metadata = [];

  for await (const item of getArticleMetadata(articlesPath)) {
    metadata.push(item);
  }

  return metadata;
}

function getMostRecentArticleMetadata() {

}