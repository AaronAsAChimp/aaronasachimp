import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow, faGithub, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.css';


interface SocialProps {
	/**
	 * An X (Twitter) username
	 */
	twitter: string,

	/**
	 * A Github username
	 */
	github: string,

	/**
	 * A Stack Overflow ID and username in the format `${userID}/${username}`
	 */
	stackoverflow: string
}

/**
 * Display social media links
 * @param {SocialProps} props
 */
export function Social ({twitter, github, stackoverflow}: SocialProps) {
	return <div className={styles['socials']}>
		{ stackoverflow ? (
			<a className={styles['socials-item']} href={`https://stackoverflow.com/users/${stackoverflow}`}>
				<FontAwesomeIcon className={styles['socials-item-icon']} icon={faStackOverflow} />
			</a>
		) : null }
		{ github ? (
			<a className={styles['socials-item']} href={`https://github.com/${github}`}>
				<FontAwesomeIcon className={styles['socials-item-icon']} icon={faGithub} />
			</a>
		) : null }
		{ twitter ? (
			<a className={styles['socials-item']} href={`https://twitter.com/${twitter}`}>
				<FontAwesomeIcon className={styles['socials-item-icon']} icon={faXTwitter} />
			</a>
		) : null }
	</div>
}