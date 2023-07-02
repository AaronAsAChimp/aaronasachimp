import React from 'react';

export function ImageCompare({children}) {
  return <div
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${children.length}, 1fr)`
    }}>
    {children}
  </div>
}

export function  ComparisonImage({alt, image, size, dim, pixelated}) {
	return <figure style={{
		display: 'flex',
		flexDirection: 'column', 
		alignItems: 'center'
	}}>
		<img alt={alt} src={image} style={{
			width: dim ? dim + 'px' : null,
			imageRendering: pixelated ? 'pixelated' : null
		}} />
		<figcaption>{alt + ( !!size ? ' (' + size + ')' : '')}</figcaption>
	</figure>
};

export function ComparisonSvg({alt, image, size, dim}) {
	return <figure style={{
		display: 'flex',
		flexDirection: 'column', 
		alignItems: 'center'
	}}>
		{image}
		<figcaption>{alt + ( !!size ? ' (' + size + ')' : '')}</figcaption>
	</figure>
}
