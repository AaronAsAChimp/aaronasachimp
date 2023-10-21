import { HomeArticleTile} from '../components/home-tile/HomeArticleTile';
import { HomeProjectTile } from '../components/home-tile/HomeProjectTile';
import { HomeHero } from '../components/home-hero/HomeHero';
import { HomeSection } from '../components/home-section/HomeSection';
import { PageFooter } from '../components/page-footer/PageFooter';


export default function Page() {
  return <>
    <HomeHero />

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
