import React, { useState, useEffect } from 'react';

const HomeHeader = () => {

    const [active, setActive] = useState(false)

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const handleScroll = () => {
        if (window.scrollY >= window.innerHeight - 42) {
            setActive(true)
        } else {
            setActive(false)
        }
    }

    return (
        <header className={active ? "active" : ""}>
            {/* <ul className='languages-switcher'>
                <li className='language-en'></li>
            </ul> */}
        </header>
    );
};

export default HomeHeader;