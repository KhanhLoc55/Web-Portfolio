import scrollReveal from 'scrollreveal';
import { useEffect, useRef } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';

const ScrollReveal = (props) => {
    const { position, children } = props;
    const isMobileDevice = useMediaQuery('(max-width : 426px)');
    const divRef = useRef(null);
    useEffect(() => {
        if (divRef.current) {
            scrollReveal().reveal(divRef.current, {
                delay: 100,
                origin: position,
                duration: 2000,
                easing: 'ease-in-out',
                distance: isMobileDevice ? '20px' : '80px',
                reset: isMobileDevice ? false : true,
            });
        }
    }, [isMobileDevice, position]);
    return <div ref={divRef}>{children}</div>;
};

export default ScrollReveal;
