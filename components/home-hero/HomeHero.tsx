import {Lexend} from 'next/font/google';
import logoSvg from '../../static/img/logo.svg';
import styles from './styles.module.css';
import clsx from 'clsx';

const lexendFont = Lexend({
  subsets: ['latin'],
  weight: '600'
})

export function HomeHero () {
	return <div className={styles['home-hero']}>
		<img className={styles['home-hero-img']} src={logoSvg.src} width={ Math.floor(logoSvg.width / 1.3) } height={ Math.floor(logoSvg.height / 1.3) } loading='lazy' />
    	<h1 className={ clsx(lexendFont.className, styles['home-heading']) }>Aaron Spaulding</h1>
	</div>
}