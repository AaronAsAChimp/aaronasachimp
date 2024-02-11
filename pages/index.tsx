import { HomeHero } from '../components/home-hero/HomeHero';
import { HomeSection } from '../components/home-section/HomeSection';
import { HomeArticleTile } from '../components/home-tile/HomeArticleTile';
import { HomeProjectTile } from '../components/home-tile/HomeProjectTile';
import { PageFooter } from '../components/page-footer/PageFooter';
import { getAllArticleMetadata } from '../lib/articles';

export async function getStaticProps() {
  const articles = await getAllArticleMetadata('./pages/articles');

  return {
    props: {
      articles
    }
  };
}


export default function Page({articles}) {
  return <>
    <HomeHero />

    <HomeSection>
      { articles.map(article => <HomeArticleTile key={article.path} title={article.title} blurb={article.blurb} href={article.path} />)}
    </HomeSection>

    <HomeSection title="Projects">
      <HomeProjectTile
        title="image-lint"
        blurb="Find broken and poorly compressed images."
        href="https://aaronasachimp.github.io/image-lint/" />

      <HomeProjectTile
        title="Block Game Tools"
        blurb="Make art in your favorite block game."
        href="https://blockgametools.com" />
    </HomeSection>

    <PageFooter />
  </>
}
