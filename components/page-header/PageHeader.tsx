import clsx from 'clsx';
import { Lexend } from 'next/font/google';
import logoSvg from '../../static/img/logo.svg';
import styles from './styles.module.css';
import Link from 'next/link';

const lexendFont = Lexend({
  subsets: ['latin'],
  weight: '600'
})

/**
 * The header for all of the non-home pages
 */
export function PageHeader() {
	return <div className={styles['page-nav']}>
		<nav>
			<img src={logoSvg.src} width={logoSvg.width / 10} height={logoSvg.height / 10}/>
			<span className={clsx(lexendFont.className, styles['page-nav-title'])}>Aaron Spaulding</span>
			<ul className={styles['page-nav-links']}>
				<li><Link href="/">Home</Link></li>
				<li><Link href="/articles/">Articles</Link></li>
			</ul>
		</nav>
	</div>
}