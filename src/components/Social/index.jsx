import React from 'react';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons';

import styles from './styles.module.css';

export default function Social ({twitter, github, stackoverflow}) {
	return <div className={styles['socials']}>		
		{ stackoverflow ? (
			<Link className={styles['socials-item']} to={`https://stackoverflow.com/users/${stackoverflow}`}><FontAwesomeIcon className={styles['socials-item-icon']} icon={faStackOverflow} /></Link>
		) : (
			null
		) }
		{ github ? (
			<Link className={styles['socials-item']} to={`https://github.com/${github}`}><FontAwesomeIcon className={styles['socials-item-icon']} icon={faGithub} /></Link>
		) : (
			null
		) }
		{ twitter ? (
			<Link className={styles['socials-item']} to={`https://twitter.com/${twitter}`}><FontAwesomeIcon className={styles['socials-item-icon']} icon={faTwitter} /></Link>
		) : (
			null
		) }
	</div>
}