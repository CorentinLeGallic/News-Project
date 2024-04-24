import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { useWindowSize } from '../hooks/useWindowSize.js';

const HomeSearchbar = ({ isLoaded }) => {

    const windowSize = useWindowSize()

    const [style, setStyle] = useState({
        "marginTop": "calc(-20vh - 42px)",
    })

    const handleScroll = () => {
        if (window.scrollY < window.innerHeight) {
            // console.log(style)
            setStyle({
                ...style,
                "marginTop": `calc(${-(20 - (window.scrollY * (20) / window.innerHeight))}vh - 42px)`,
            })
            // console.log(style)
        } else {
            // console.log(style)
            setStyle({
                ...style,
                "marginTop": "max(calc(-20vh - 42px))",
            })
            // console.log(style)
        }
    }

    const handleClick = () => {
        if (window.scrollY < window.innerHeight && isLoaded) {
            window.scrollTo(0, window.innerHeight)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [style])

    useEffect(() => {
        if (windowSize.width < 320) {
            // console.log(style)
            setStyle({
                ...style,
                "width": "95vw",
                "minWidth": 0,
            })
            // console.log(style)
        } else {
            // console.log(style)
            setStyle({
                ...style,
                "width": "25vw",
                "minWidth": 300,
            })
            // console.log(style)
        }
    }, [windowSize.width])

    return (
        <SearchBar situation="home" style={style} eventsHandlers={{ "onClick": handleClick }} />
    );
};

export default HomeSearchbar;