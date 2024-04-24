import React, { useEffect, useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize.js';
import { useDidMountEffect } from '../hooks/useDidMountEffect';

const BarLoader = ({ loaderCounter }) => {

    const windowSize = useWindowSize()

    const width = 0.7 * windowSize.width

    const [loaderStyle, setLoaderStyle] = useState({
        transition: "none",
        right: width - 21,
    })

    useDidMountEffect(() => {
        setLoaderStyle({
            transition: "none",
            right: width - loaderCounter * width / 100 + 1,
        })
    }, [windowSize])

    // useEffect(() => {
    //     console.log("WindowSizeEdit : ")
    //     console.log(windowSize)
    //     // setLoaderStyle({
    //     //     transition: "none",
    //     //     right: width - loaderCounter * width / 100 + 1,
    //     // })
    // }, [windowSize])

    useEffect(() => {
        // console.log("right : " + (width - loaderCounter * width / 100))
        // console.log(width - loaderCounter * width / 100)
        // console.log("width : " + width)
        console.log("loaderCounter : " + loaderCounter)
        if ((width - loaderCounter * width / 100 + 1) >= width) {
            setTimeout(() => {
                setLoaderStyle({
                    transition: ".5s ease-out",
                    right: width - loaderCounter * width / 100 + 1
                })
            }, 1)
        }
    }, [loaderCounter])

    // useEffect(() => {
    //     console.log("right : " + (animationLoaded ? width - loaderCounter * width / 100 : 0))
    //     setTimeout(() => {
    //         setLoaderStyle({
    //             ...loaderStyle,
    //             transition: "2s ease-out",
    //         })
    //     }, 1)
    // }, [animationLoaded])

    // if (loaderCounter >= 100 || !animationLoaded) {
    //     return null;
    // } else {
    return (
        <div className='accueil-loader-container' style={{ width: width, left: "calc(50vw - " + width / 2 + "px)" }}>
            <div className='bar-loader' style={{ width: width }}>
                <div style={loaderStyle} />
                {/* <div style={{ right: width - loaderCounter * width / 100, ...loaderStyle, }} /> */}
            </div>
        </div>
    );
    // }
};

export default BarLoader;