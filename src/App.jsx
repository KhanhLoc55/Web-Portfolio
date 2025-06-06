import React, { useContext, useEffect, useRef, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Skill from './components/skill/Skill';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import { ThemeContext } from './utils/context';

import './app.scss';
import './components/portfolio/portfolio.scss';
import { useMediaQuery } from '@uidotdev/usehooks';
import Lenis from '@studio-freight/lenis';
import Loading from './components/loading/loading';

const App = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const isMobileDevice = useMediaQuery('(max-width : 426px)');
    const lenisRef = useRef(null);

    // 👇 Thêm state loading
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const applyDarkModeScrollBar = () => {
            if (darkMode) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        };

        applyDarkModeScrollBar();

        // Clean up instance trước khi tạo mới
        if (lenisRef.current) {
            lenisRef.current.destroy();
        }

        const lenis = new Lenis({
            smooth: true,
            lerp: 0.08,
        });

        lenisRef.current = lenis;

        let animationFrame;
        const raf = (time) => {
            lenis.raf(time);
            animationFrame = requestAnimationFrame(raf);
        };

        animationFrame = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(animationFrame);
            lenis.destroy();
        };
    }, [darkMode]);

    // 👇 Hiệu ứng loading 5s
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000); // 5s

        return () => clearTimeout(timer);
    }, []);

    // Lấy màu nền theo theme
    const root = getComputedStyle(document.documentElement);
    const backgroundColor = darkMode
        ? root.getPropertyValue('--backgroundDark')
        : root.getPropertyValue('--backgroundLight');
    const color = darkMode ? root.getPropertyValue('--textColorDark') : root.getPropertyValue('--textColorlight');

    // 👇 Điều kiện hiển thị
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div
            className="App"
            style={{
                backgroundColor: backgroundColor.trim(),
                color: color.trim(),
            }}
        >
            {!isMobileDevice && <AnimatedCursor color={darkMode ? '194, 232, 248' : '14, 112, 186'} innerSize={16} />}
            <Header />
            <Intro />
            <Portfolio />
            <Skill />
            <Resume />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
