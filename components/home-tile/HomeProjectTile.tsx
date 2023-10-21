import styles from './styles.module.css';

interface HomeArticleTileProps {
	/**
	 * The name of the project
	 */
	title: string,

	/**
	 * A one sentence introduction to the project that entices the user to visit it.
	 */
	blurb: string,

	/**
	 * The URL of the project
	 */
	href: string
}

export function HomeProjectTile({ title, blurb, href }: HomeArticleTileProps) {
	return <div className={styles['home-tile']}>
        <h3 className={styles['home-tile-heading']}>{ title }</h3>
        <p className={styles['home-tile-blurb']}>
        { blurb }
        </p>
        <a className={styles['home-tile-cta']} href={href}>Check it out &rsaquo;</a>
	</div>
}