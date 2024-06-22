import { useCallback, useContext, useEffect } from 'react';

import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Skill from './components/skill/Skill';
import Resume from './components/resume/Resume';

import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';

import { ThemeContext } from './utils/context';
import './app.scss';
import './components/portfolio/portfolio.scss';
import Contact from './components/contact/Contact';
import AnimatedCursor from 'react-animated-cursor';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Đảm bảo bạn đã thêm style này
import ScrollReveal from 'scrollreveal';

const App = () => {
    //dark mode
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const darkModeSrollBar = useCallback(() => {
        console.log('darkmode', darkMode);
        if (darkMode) {
            document.querySelector('body').classList.add('dark');
        } else {
            document.querySelector('body').classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        darkModeSrollBar();
    }, [darkModeSrollBar]);

    // Truy cập vào root đổi màu color
    const root = getComputedStyle(document.documentElement);
    const backgroundColor = darkMode
        ? root.getPropertyValue('--backgroundDark')
        : root.getPropertyValue('--backgroundLight');
    const color = darkMode ? root.getPropertyValue('--textColorDark') : root.getPropertyValue('--textColorlight');

    // useEffect(() => {
    //     const srLeft = ScrollReveal({
    //         origin: 'top',
    //         duration: 2000,
    //         easing: 'ease-in-out',
    //         // distance: '80px',

    //         reset: true,
    //     });

    //     srLeft.reveal('.ScrollReveal-left', { delay: 100 });
    // }, []);

    // useEffect(() => {
    //     const srRight = ScrollReveal({
    //         origin: 'bottom',
    //         duration: 2000,
    //         easing: 'ease-in-out',
    //         // distance: '80px',

    //         reset: true,
    //     });

    //     srRight.reveal('.ScrollReveal-right', { delay: 100 });
    // }, []);

    return (
        <div
            className="App"
            style={{
                backgroundColor: backgroundColor.trim(),
                color: color.trim(),
            }}
        >
            <AnimatedCursor color={darkMode ? '194, 232, 248' : '14, 112, 186'} innerSize={16} />
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
