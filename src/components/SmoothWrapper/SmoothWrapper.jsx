import { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

const SmoothWrapper = ({ children }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (!scrollRef.current) return;

        const options = {
            damping: 0.08,
            renderByPixels: true,
            alwaysShowTracks: false,
        };

        const scrollbar = Scrollbar.init(scrollRef.current, options);

        // Lưu vào global để dùng ở nơi khác
        window.scrollbar = scrollbar;

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
