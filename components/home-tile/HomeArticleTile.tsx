import Link from 'next/link';
import styles from './styles.module.css';

interface HomeArticleTileProps {
	/**
	 * The title of the article
	 */
	title: string,

	/**
	 * A one sentence introduction to the article that entices the user to read it.
	 */
	blurb: string,

	/**
	 * The URL of the article
	 */
	href: string
}

export function HomeArticleTile({ title, blurb, href }: HomeArticleTileProps) {
	return <div className={styles['home-tile']}>
        <h3 className={styles['home-tile-heading']}>{ title }</h3>
        <p className={styles['home-tile-blurb']}>
        { blurb }
        </p>
        <Link className={styles['home-tile-cta']} href={href}>Read the article &rsaquo;</Link>
	</div>
}