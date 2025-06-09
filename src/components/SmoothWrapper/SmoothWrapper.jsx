import { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

const SmoothWrapper = ({ children }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (!scrollRef.current) return;
        const options = {
            damping: 0.08, // càng thấp thì càng chặt (0.05–0.1)
            renderByPixels: true, // pixel-perfect scroll
            alwaysShowTracks: false,
        };

        const scrollbar = Scrollbar.init(scrollRef.current, options);

        return () => {
            scrollbar.destroy();
        };
    }, []);

    return (
        <div ref={scrollRef} style={{ height: '100vh', overflow: 'hidden' }}>
            <div>{children}</div>
        </div>
    );
};

export default SmoothWrapper;
