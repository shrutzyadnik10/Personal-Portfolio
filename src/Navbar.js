import React, { useEffect, useState } from 'react';

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleWindowScroll = () => {
            setMenuOpen(false);
        };

        const handleMouseMove = (e) => {
            const cursor1 = document.querySelector('.cursor-1');
            const cursor2 = document.querySelector('.cursor-2');

            if (cursor1 && cursor2) {
                cursor1.style.top = e.pageY + 'px';
                cursor1.style.left = e.pageX + 'px';
                cursor2.style.top = e.pageY + 'px';
                cursor2.style.left = e.pageX + 'px';
            }
        };

        const handleLinkMouseEnter = () => {
            const cursor1 = document.querySelector('.cursor-1');
            const cursor2 = document.querySelector('.cursor-2');
            cursor1.classList.add('active');
            cursor2.classList.add('active');
        };

        const handleLinkMouseLeave = () => {
            const cursor1 = document.querySelector('.cursor-1');
            const cursor2 = document.querySelector('.cursor-2');
            cursor1.classList.remove('active');
            cursor2.classList.remove('active');
        };

        window.addEventListener('scroll', handleWindowScroll);
        window.addEventListener('mousemove', handleMouseMove);

        document.querySelectorAll('a').forEach((link) => {
            link.addEventListener('mouseenter', handleLinkMouseEnter);
            link.addEventListener('mouseleave', handleLinkMouseLeave);
        });

        return () => {
            window.removeEventListener('scroll', handleWindowScroll);
            window.removeEventListener('mousemove', handleMouseMove);

            document.querySelectorAll('a').forEach((link) => {
                link.removeEventListener('mouseenter', handleLinkMouseEnter);
                link.removeEventListener('mouseleave', handleLinkMouseLeave);
            });
        };
    }, []);

    const handleMenuClick = () => {
        setMenuOpen(!isMenuOpen);
        let header = document.querySelector('header');
        header.classList.toggle('active');

    };
    const handleMenuItemClick = () => {
        setMenuOpen(!isMenuOpen);
        let header = document.querySelector('header');
        header.classList.toggle('active');

    };

    return (
        <div className="Nav">
            <div className="cursor-1"></div>
            <div className="cursor-2"></div>
            <header>
                <a href="#" className="logo">
                    <span>shruti</span> yadnik
                </a>

                <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                    <a  onClick={handleMenuItemClick} href="#home">home</a>
                    <a  onClick={handleMenuItemClick} href="#about">about</a>
                    <a  onClick={handleMenuItemClick} href="#experience">experience</a>
                    <a  onClick={handleMenuItemClick} href="#education">education</a>
                    <a  onClick={handleMenuItemClick} href="#project">projects</a>
                    <a  onClick={handleMenuItemClick} href="#interest">interest</a>
                    <a  onClick={handleMenuItemClick} href="#contact">contact</a>
                </nav>

                <div className="follow">
                    <a href="https://github.com/shrutzyadnik10" target="_blank" className="fab fa-github"></a>
                    <a href="https://in.linkedin.com/in/shruti-yadnik-28b9631bb" target="_blank" className="fab fa-linkedin"></a>
                    <a href="https://www.instagram.com/shrutz_yadnik/" target="_blank" className="fab fa-instagram"></a>
                </div>

                <div
                    id="menu-bars"
                    className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} ${isMenuOpen ? 'open' : ''}`}
                    onClick={handleMenuClick}
                ></div>
            </header>
        </div>
    );
}

export default Navbar;
