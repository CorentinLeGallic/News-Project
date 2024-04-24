import React, { useEffect, useState } from 'react';
import NewsNoImage from './NewsNoImage';
import { useWindowSize } from '../hooks/useWindowSize.js';

const NewsNoImageContainer = (props) => {

    const windowSize = useWindowSize()
    const [containerSize, setContainerSize] = useState([])

    useEffect(() => {
        // console.log("Window resize : " + windowSize)
        if (windowSize.width > 1200) {
            setContainerSize([1170, 200])
        } else if (windowSize.width > 800) {
            setContainerSize([770, 200])
        } else if (windowSize.width > 600) {
            setContainerSize([570, 200])
        } else if (windowSize.width > 400) {
            setContainerSize([370, 200])
        }
        // console.log(containerSize)
    }, [windowSize])

    return (
        <ul className="news-container news-no-image-container" style={{ width: containerSize[0] }} >
            {
                props.articles.map((article, index) => ( /* Condition ci-dessous : (si article affiché : (si hover : (si ratio fenêtre < ratio image : "auto 110%" sinon :  "110%") sinon : (si ratio fenêtre < ratio image : "auto 100%" sinon :  "100%")) sinon: 100%)*/
                    <NewsNoImage article={article} key={index} />
                ))
            }
        </ul>
    );
};

export default NewsNoImageContainer;