import React, { useContext, useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Đảm bảo bạn đã thêm style này

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
import { ReactLenis } from 'lenis/react';

const App = () => {
    //dark mode
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const isMobileDevice = useMediaQuery('(max-width : 426px)');

    //code cũ
    // const darkModeSrollBar = useCallback(() => {
    //     console.log('darkmode', darkMode);
    //     if (darkMode) {
    //         document.querySelector('body').classList.add('dark');
    //     } else {
    //         document.querySelector('body').classList.remove('dark');
    //     }
    // }, [darkMode]);

    // useEffect(() => {
    //     darkModeSrollBar();
    // }, [darkModeSrollBar]);

    useEffect(() => {
        const applyDarkModeScrollBar = () => {
            if (darkMode) {
                document.querySelector('body').classList.add('dark');
            } else {
                document.querySelector('body').classList.remove('dark');
            }
        };

        applyDarkModeScrollBar();

        // Cleanup function
        return () => {
            // Clean up any event listeners or subscriptions here if necessary
        };
    }, [darkMode]);

    // Truy cập vào root đổi màu color
    const root = getComputedStyle(document.documentElement);
    const backgroundColor = darkMode
        ? root.getPropertyValue('--backgroundDark')
        : root.getPropertyValue('--backgroundLight');
    const color = darkMode ? root.getPropertyValue('--textColorDark') : root.getPropertyValue('--textColorlight');

    return (
        <ReactLenis root>
            <div
                className="App"
                style={{
                    backgroundColor: backgroundColor.trim(),
                    color: color.trim(),
                }}
            >
                {!isMobileDevice && (
                    <AnimatedCursor color={darkMode ? '194, 232, 248' : '14, 112, 186'} innerSize={16} />
                )}
                <Header />
                <Intro />
                <Portfolio />
                <Skill />
                <Resume />
                <Contact />
                <Footer />
            </div>
        </ReactLenis>
    );
};

export default App;
