import scrollReveal from 'scrollreveal';
import { useEffect, useRef } from 'react';

const ScrollReveal = (props) => {
    const { position, children } = props;
    const divRef = useRef(null);
    useEffect(() => {
        const sr = scrollReveal({
            origin: position,
            duration: 2000,
            easing: 'ease-in-out',
            distance: '80px',
            reset: true,
        });
        if (divRef.current) {
            sr.reveal(divRef.current, { delay: 100 });
        }
    }, [position]);
    return <div ref={divRef}>{children}</div>;
};

export default ScrollReveal;
