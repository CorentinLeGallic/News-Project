import React, { useEffect, useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize.js';
import Logo from './Logo';

const HomeLogo = () => {

    const windowSize = useWindowSize()

    const logoRatio = 1.09;

    const [style, setStyle] = useState({
        // "width": 50 * logoRatio + "vh",
        // "height": "50vh",
        "width": windowSize.height / 2 * logoRatio - 40,
        "height": windowSize.height / 2 - 40 * (1 / logoRatio),
    })

    useEffect(() => {
        const dimensions = {
            "width": windowSize.height / 2 * logoRatio,
            "height": windowSize.height / 2,
        }
        // console.log("Resize from logo ! Style widht and height : " + dimensions["width"] + " " + dimensions["height"] + " - Window size : " + windowSize[0] + " " + windowSize[1])
        if (dimensions["width"] > windowSize.width && dimensions["height"] > windowSize.height) {
            // console.log("Both >")
            if (windowSize.width / windowSize.height > logoRatio) {
                // console.log(">")
                setStyle({
                    ...style,
                    "width": windowSize.width - 40,
                    "height": (windowSize.width - 40) * (1 / logoRatio)
                })
            } else {
                // console.log("<")
                setStyle({
                    ...style,
                    "height": windowSize.height - 40 * (1 / logoRatio),
                    "width": windowSize.height * logoRatio - 40
                })
            }
        } else if (dimensions["width"] > windowSize.width) {
            // console.log("Width >")
            // console.log(windowSize[0])
            setStyle({
                ...style,
                "width": windowSize.width - 40,
                "height": (windowSize.width - 40) * (1 / logoRatio)
            })
        } else if (dimensions["height"] > windowSize.height) {
            // console.log("height >");
            setStyle({
                ...style,
                "height": windowSize.height - 40 * (1 / logoRatio),
                "width": windowSize.height * logoRatio - 40
            })
        } else {
            // console.log("No problem with resize !")
            // console.log(windowSize[1] / 2 * logoRatio)
            setStyle({
                "width": windowSize.height / 2 * logoRatio - 40,
                "height": windowSize.height / 2 - 40 * (1 / logoRatio),
            })
        }
    }, [windowSize])

    return (
        <Logo style={style} className="home" />
    );
};

export default HomeLogo;