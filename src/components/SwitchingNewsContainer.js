import React, { useEffect, useState } from 'react';
import SwitchingNews from './SwitchingNews';
import { useWindowSize } from '../hooks/useWindowSize.js';

const SwitchingNewsContainer = (props) => {

    const [articleIndex, setArticleIndex] = useState(0)
    const [hover, setHover] = useState(false)
    const windowSize = useWindowSize()
    // const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight])
    const [style, setStyle] = useState({})
    const [containerSize, setContainerSize] = useState([])
    // const [articleImageRatio, setArticleImageRatio] = useState()

    // const getArticleImageRatio = (article) => {
    //     const img = new Image();
    //     img.onload = () => {
    //         setArticleImageRatio(img.width / img.height)
    //     }
    //     img.onerror = () => {

    //     }
    //     img.src = article.urlToImage;
    // }

    // useEffect(() => {
    //     getArticleImageRatio(props.article)
    // })

    const handleChange = (event) => {
        setStyle({
            "transition": "left 0.2s ease-in-out"
        })
        setArticleIndex(Number(event.target.value))
        setTimeout(() => {
            setStyle({})
        }, 200)
    }

    const handleMouseEnter = () => {
        setHover(true)
    }

    const handleMouseLeave = () => {
        setHover(false)
    }

    const switchArticle = () => {
        if (articleIndex == props.articles.length - 1) {
            setArticleIndex(0)
        } else {
            setArticleIndex(articleIndex + 1)
        }
    }

    useEffect(() => {
        // console.log("Window resize : " + windowSize)
        if (windowSize.width > 1200) {
            setContainerSize([1170, windowSize.height * 0.7])
        } else if (windowSize.width > 800) {
            setContainerSize([770, 770 * 2 / 3])
        } else if (windowSize.width > 600) {
            setContainerSize([570, 570 * 2 / 3])
        } else if (windowSize.width > 400) {
            setContainerSize([370, 370 * 2 / 3])
        } else if (windowSize.width > 300) {
            setContainerSize([270, 270 * 2 / 3])
        } else {
            setContainerSize([220, 220 * 2 / 3])
        }
        // console.log(containerSize)
    }, [windowSize])

    useEffect(() => {
        const switchTimeout = setTimeout(switchArticle, 15000)
        return () => {
            clearTimeout(switchTimeout)
        }
    }, [props.article, articleIndex])

    // const getArticleImageRatio = (article) => {
    //     const img = new Image();
    //     img.src = article.urlToImage;
    //     return (img.width / img.height)
    // }

    return (
        <div className='switching-news-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ width: containerSize[0], height: containerSize[1] }} >
            <ul className='switching-news-list' style={{ left: -articleIndex * containerSize[0] + "px", ...style }}>
                {props.articles.map((article, index) => ( /* Condition ci-dessous : (si article affiché : (si hover : (si ratio fenêtre < ratio image : "auto 110%" sinon :  "110%") sinon : (si ratio fenêtre < ratio image : "auto 100%" sinon :  "100%")) sinon: 100%)*/
                    <SwitchingNews article={article} key={index} containerSize={containerSize} hover={hover} style={{ backgroundImage: 'url("' + article.urlToImage + '")', width: containerSize[0], height: containerSize[1] }}
                    /* <SwitchingNews article={article} key={index} containerSize={containerSize} hover={hover} style={{ backgroundImage: 'url("' + article.urlToImage + '")', width: containerSize[0], height: containerSize[1], backgroundSize: (index == articleIndex) ? hover ? (containerSize[0] / containerSize[1] < articleImageRatio) ? "auto 110%" : "110%" : (containerSize[0] / containerSize[1] < articleImageRatio) ? "auto 100%" : "100%" : "100%" }} */
                    />
                ))}
            </ul>
            <div className="switching-radio-container" >
                {props.articles.map((article, index) => (
                    <input key={index} type="radio" name="switching-radio" className='switching-radio' value={index} onChange={handleChange} checked={articleIndex == index ? "checked" : ""} />
                ))}
            </div>
        </div>
    );
};

// <NewsImage situation="switching-news" article={article} key={index} style={{ width: containerSize[0], height: containerSize[1], backgroundSize: (index == articleIndex) ? hover ? (containerSize[0] / containerSize[1] < articleImageRatio) ? "auto 110%" : "110%" : (containerSize[0] / containerSize[1] < articleImageRatio) ? "auto 100%" : "100%" : "100%" }} /> */}


export default SwitchingNewsContainer;

// import React, { useEffect, useState, useRef, useContext } from 'react';
// import SwitchingNews from './SwitchingNews';
// import NewsImage from './NewsImage';
// import { WindowSizeContext } from '../Context';

// const SwitchingNewsContainer = (props) => {

//     const [articleIndex, setArticleIndex] = useState(0)
//     const [hover, setHover] = useState(false)
//     const windowSize = useContext(WindowSizeContext)
//     // const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight])
//     const [style, setStyle] = useState({})
//     const [containerSize, setContainerSize] = useState([])

//     const handleChange = (event) => {
//         setStyle({
//             "transition": "left 0.2s ease-in-out"
//         })
//         setArticleIndex(Number(event.target.value))
//         setTimeout(() => {
//             setStyle({})
//         }, 200)
//     }

//     const handleMouseEnter = () => {
//         setHover(true)
//         console.log("Mouse enter")
//     }

//     const handleMouseLeave = () => {
//         setHover(false)
//     }

//     const switchArticle = () => {
//         if (articleIndex == props.articles.length - 1) {
//             setArticleIndex(0)
//         } else {
//             setArticleIndex(articleIndex + 1)
//         }
//     }

//     useEffect(() => {
//         console.log("Window resize : " + windowSize)
//         if (windowSize[0] > 1200) {
//             setContainerSize([1170, windowSize[1] * 0.7])
//         } else if (windowSize[0] > 800) {
//             setContainerSize([770, 770 * 2 / 3])
//         } else if (windowSize[0] > 600) {
//             setContainerSize([570, 570 * 2 / 3])
//         } else if (windowSize[0] > 400) {
//             setContainerSize([370, 370 * 2 / 3])
//         }
//         console.log(containerSize)
//     }, [windowSize])

//     useEffect(() => {
//         const switchTimeout = setTimeout(switchArticle, 15000)
//         return () => {
//             clearTimeout(switchTimeout)
//         }
//     }, [props.article, articleIndex])

//     const getArticleImageRatio = (article) => {
//         const img = new Image();
//         img.src = article.urlToImage;
//         return (img.width / img.height)
//     }

//     return (
//         <div className='switching-news-container' style={{ width: containerSize[0], height: containerSize[1] }} >
//             <ul className='switching-news-list' style={{ left: -articleIndex * containerSize[0] + "px", ...style }}>
//                 {props.articles.map((article, index) => ( /* Condition ci-dessous : (si article affiché : (si hover : (si ratio fenêtre < ratio image : "auto 110%" sinon :  "110%") sinon : (si ratio fenêtre < ratio image : "auto 100%" sinon :  "100%")) sinon: 100%)*/
//                     <NewsImage situation="switching-news" article={article} key={index} style={{ width: containerSize[0], height: containerSize[1] }} />
//                     /* <SwitchingNews article={article} key={index} style={{ backgroundSize: (index == articleIndex) ? hover ? ((windowSize[0] * 0.6) / (windowSize[1] * 0.7) < articleImageRatio) ? "auto 110%" : "110%" : ((windowSize[0] * 0.6) / (windowSize[1] * 0.7) < articleImageRatio) ? "auto 100%" : "100%" : "100%" }} /> */
//                 ))}
//             </ul>
//             <div className="switching-radio-container" >
//                 {props.articles.map((article, index) => (
//                     <input key={index} type="radio" name="switching-radio" className='switching-radio' value={index} onChange={handleChange} checked={articleIndex == index ? "checked" : ""} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SwitchingNewsContainer;