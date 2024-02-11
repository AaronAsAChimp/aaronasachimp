import { HomeSection } from '../../components/home-section/HomeSection';
import { HomeArticleTile } from '../../components/home-tile/HomeArticleTile';
import { PageFooter } from '../../components/page-footer/PageFooter';
import { PageHeader } from '../../components/page-header/PageHeader';
import { getAllArticleMetadata } from '../../lib/articles';

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
    <PageHeader />
    <HomeSection>
      { articles.map(article => <HomeArticleTile key={article.path} title={article.title} blurb={article.blurb} href={article.path} />)}
    </HomeSection>
    <PageFooter />
  </>
}
