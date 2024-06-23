import scrollReveal from 'scrollreveal';
import { useEffect, useRef } from 'react';

const ScrollReveal = (props) => {
    const { position, children } = props;
    const divRef = useRef(null);
    useEffect(() => {
        if (divRef.current) {
            scrollReveal().reveal(divRef.current, {
                delay: 100,
                origin: position,
                duration: 2000,
                easing: 'ease-in-out',
                distance: '80px',
                reset: true,
            });
        }
    }, [position]);
    return <div ref={divRef}>{children}</div>;
};

export default ScrollReveal;
