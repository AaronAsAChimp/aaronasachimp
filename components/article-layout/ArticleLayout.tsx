import { PropsWithChildren } from "react";
import styles from './styles.module.css';
import { PageHeader } from "../page-header/PageHeader";
import { PageFooter } from "../page-footer/PageFooter";

export function ArticleLayout({children}: PropsWithChildren) {
	return <div>
		<PageHeader />
		<article className={styles['article']}>
		{children}
		</article>
		<PageFooter />
	</div>;
}