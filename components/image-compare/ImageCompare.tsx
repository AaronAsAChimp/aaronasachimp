import React from 'react';
import styles from './styles.module.css';

export function ImageCompare({children}) {
  return <div
  	className={styles['image-compare']}
    style={{
    	gridTemplateColumns: `repeat(${children.length}, 1fr)`
    }}>
    {children}
  </div>
}

export function  ComparisonImage({alt, image, size, dim, pixelated}) {
	return <figure className={styles['comparison-image']}>
		<img alt={alt} src={image} width={dim} style={{
			imageRendering: pixelated ? 'pixelated' : void 0
		}} />
		<figcaption>{alt + ( !!size ? ' (' + size + ')' : '')}</figcaption>
	</figure>
};
