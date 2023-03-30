import React from 'react';
import styles from './styles.module.css';

const WIDTH = 200;
const HEIGHT = 100;

export default function Splotchy() {
    const circles = {
        'a': {
            x: Math.random() * WIDTH,
            y: Math.random() * HEIGHT,
            r: 25
        },
        'b': {
            x: Math.random() * WIDTH,
            y: Math.random() * HEIGHT,
            r: 25
        },
        'c': {
            x: Math.random() * WIDTH,
            y: Math.random() * HEIGHT,
            r: 25
        }
    };

    const [state, setState] = React.useState([
        {
            x: circles.a.x,
            y: circles.a.y,
            r: circles.a.r
        }, {
            x: circles.b.x,
            y: circles.b.y,
            r: circles.b.r
        }, {
            x: circles.c.x,
            y: circles.c.y,
            r: circles.c.r
        }
    ]);

    const requestRef = React.useRef()

    const animate = time => {
        circles.a.x += 0.01;
        circles.a.y += 0.01;
        circles.a.r += 0.01;

        circles.b.x += 0.01;
        circles.b.y += 0.01;
        circles.b.r += 0.01;

        circles.c.x += 0.01;
        circles.c.y += 0.01;
        circles.c.r += 0.01;

        requestRef.current = requestAnimationFrame(animate);
        setState([
            {
                x: circles.a.x,
                y: circles.a.y,
                r: 15 + (Math.sin(circles.a.r) + 1) * 11
            }, {
                x: circles.b.x,
                y: circles.b.y,
                r: 15 + (Math.sin(circles.b.r) + 1) * 5
            }, {
                x: circles.c.x,
                y: circles.c.y,
                r: 10 + (Math.sin(circles.c.r) + 1) * 15
            }
        ]);
    }

    React.useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

  return (
     <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${ WIDTH } ${ HEIGHT }`}
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
            { state.map((circle) => {
                return <circle
                    className={styles.blob}
                    cx={ circle.x }
                    cy={ circle.y }
                    r={ circle.r } />
            }) }
        </g>
    </svg>
    );
}
