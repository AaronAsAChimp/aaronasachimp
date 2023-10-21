import {Social} from '../social/Social';
import styles from './styles.module.css';

export function PageFooter() {
	return <div className={styles['page-footer']}>
		<div className={styles['page-footer-inner']}>
			<span>Copyright © 2023 Aaron Spaulding</span>
			<Social twitter="AaronAsAChimp" github="AaronAsAChimp" stackoverflow="1141784/aaronasachimp" />
		</div>
	</div>
}