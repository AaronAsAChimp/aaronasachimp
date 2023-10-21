import { PropsWithChildren } from "react";
import styles from './styles.module.css';

interface HomeSectionProps {
	title?: string
}

export function HomeSection({title, children}: PropsWithChildren<HomeSectionProps>) {
	return <div className={styles['home-section']}>
		{ title ? <h2>{title}</h2> : null }
		<div className={styles['home-section-items']}>
		{children}
		</div>
	</div>
}