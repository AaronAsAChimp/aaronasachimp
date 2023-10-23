import { HomeArticleTile} from '../../components/home-tile/HomeArticleTile';
import { HomeSection } from '../../components/home-section/HomeSection';
import { PageFooter } from '../../components/page-footer/PageFooter';
import { PageHeader } from '../../components/page-header/PageHeader';


export default function Page() {
  return <>
    <PageHeader />
    <HomeSection>
      <HomeArticleTile
        title="Optimizing Images"
        blurb="Learn the secrets of image compression two decades in the making."
        href="/articles/optimizing-images" />

      <HomeArticleTile
        title="SVG and the off by ½ error"
        blurb="Putting a beloved image format under the microscope."
        href="/articles/svg" />

      <HomeArticleTile
        title="Do side effects prevent tree shaking?"
        blurb="Shaking things up with a deep dive into module bundling."
        href="/articles/side-effects-and-tree-shaking" />
    </HomeSection>
    <PageFooter />
  </>
}
