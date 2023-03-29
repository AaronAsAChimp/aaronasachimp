import React from 'react';
import styles from './styles.module.css';

export default function Splotchy() {
    let x = 0;
    let y = 0;

   const [state, setState] = React.useState({
        x: 0,
        y: 0
    });

    const requestRef = React.useRef()

    const animate = time => {
        x += 0.01;
        y += 0.01;
        requestRef.current = requestAnimationFrame(animate);
        setState({
            x: x,
            y: y
        });
    }

    React.useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

  return (
     <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <defs id="defs2">
        <filter
            id="filter1012"
            x="-0.16726229"
            y="-0.15947616"
            width="1.3345246"
            height="1.3189523">
            <feGaussianBlur
            stdDeviation="13.561758241758239"
            result="result1" />
            <feComponentTransfer>
            <feFuncR
            type="identity" />
            <feFuncG
            type="identity" />
            <feFuncB
            type="identity" />
            <feFuncA
            type="discrete"
            tableValues="0 0.75 0 1" />
            </feComponentTransfer>
        </filter>
     </defs>
    <g style={{ filter: 'url(#filter1012)' }}>
        <ellipse
            className={styles.blob}
            id="path868"
            cx="96.039635"
            cy="101.40961"
            rx="40.91238"
            ry="37.194714" />
        <circle
            className={styles.blob}
            id="circle892"
            cx="-18.381773"
            cy="129.08554"
            r="50" />
        <circle
            className={styles.blob}
            id="circle992"
            cx="12.598749"
            cy="5.5765066"
            r="50"
            transform={'translate(' + state.x + ',' + state.y + ')'}
            />
        </g>
    </svg>
    );
}
