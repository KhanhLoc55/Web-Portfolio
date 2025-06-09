import React, { useContext, useEffect, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

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
import Loading from './components/loading/loading';
import SmoothWrapper from './components/SmoothWrapper/SmoothWrapper';

const App = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    // 👇 Thêm state loading
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const applyDarkModeScrollBar = () => {
    //         if (darkMode) {
    //             document.body.classList.add('dark');
    //         } else {
    //             document.body.classList.remove('dark');
    //         }
    //     };

    //     applyDarkModeScrollBar();

    //     // Clean up instance trước khi tạo mới
    //     if (lenisRef.current) {
    //         lenisRef.current.destroy();
    //     }

    //     const lenis = new Lenis({
    //         lerp: 0.2, // tăng lên (0.2–0.3) để scroll phản hồi nhanh hơn
    //         smoothWheel: true, // bật smooth wheel (mặc định đã true)
    //         duration: 1.2, // thời gian chuyển động cho mỗi scroll (tuỳ chọn)
    //         wheelMultiplier: 1.1, // tăng nhẹ độ nhạy chuột
    //     });

    //     lenisRef.current = lenis;

    //     let animationFrame;
    //     const raf = (time) => {
    //         lenis.raf(time);
    //         animationFrame = requestAnimationFrame(raf);
    //     };

    //     animationFrame = requestAnimationFrame(raf);

    //     return () => {
    //         cancelAnimationFrame(animationFrame);
    //         lenis.destroy();
    //     };
    // }, [darkMode]);

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
        <>
            <AnimatedCursor color={darkMode ? '194, 232, 248' : '14, 112, 186'} innerSize={16} />
            <SmoothWrapper>
                <Header />
                <div
                    className="App"
                    style={{
                        backgroundColor: backgroundColor.trim(),
                        color: color.trim(),
                        paddingTop: '140px', // để tránh nội dung bị Header đè
                    }}
                >
                    <Intro />
                    <Portfolio />
                    <Skill />
                    <Resume />
                    <Contact />
                    <Footer />
                </div>
            </SmoothWrapper>
        </>
    );
};

export default App;
