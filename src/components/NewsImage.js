import React, { useEffect, useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize.js';
import Article from './Article';
import { useImageRatio } from '../hooks/useImageRatio';

const NewsImage = (props) => {

    const [hover, setHover] = useState(false)
    // const [articleImageRatio, setArticleImageRatio] = useState()
    const articleImageRatio = useImageRatio(props.article.urlToImage)
    const windowSize = useWindowSize()

    const newsImageSize = {
        "first-news": [350, 200],
        "second-news": [270, 150],
        "search-news-image": [200, 150]
    }

    // const getArticleImageRatio = (article) => {
    //     const img = new Image();
    //     img.onload = () => {
    //         setArticleImageRatio(img.width / img.height)
    //         // console.log((img.width / img.height))
    //     }
    //     img.src = article.urlToImage;
    // }

    // useEffect(() => {
    //     getArticleImageRatio(props.article)
    // }, [])

    const containerRatio = newsImageSize[props.situation.replace("default ", "")][0] / newsImageSize[props.situation.replace("default ", "")][1]

    const handleMouseEnter = () => {
        setHover(true)
        // console.log("Image mouse enter")
    }

    const handleMouseLeave = () => {
        setHover(false)
        // console.log("Image mouse leave")
    }

    const [liProps, setLiProps] = useState({
        "className": "news-image " + (props.situation ? props.situation : "default"),
        "style": {
            "backgroundImage": 'url("' + props.article.urlToImage + '")', "backgroundImage": 'url("' + props.article.urlToImage + '")', backgroundSize: hover ? (containerRatio < articleImageRatio) ? "auto 105%" : "105%" : (containerRatio < articleImageRatio) ? "auto 100%" : "100%"
        },
        "onMouseEnter": props.situation.includes("search-news-image") ? handleMouseEnter : undefined,
        "onMouseLeave": props.situation.includes("search-news-image") ? handleMouseLeave : undefined,
    }, [])

    useEffect(() => {
        // console.log("Container Ratio : " + containerRatio)
        // console.log("ImageRatio : " + articleImageRatio)
        // console.log("First useEffect héhé : " + hover ? (containerRatio < articleImageRatio) ? "auto 105%" : "105%" : (containerRatio < articleImageRatio) ? "auto 100%" : "100%")
        // console.log("Changed !")
        const usedHover = props.hover ? props.hover : hover
        setLiProps({
            // "className": "news-image " + (props.situation ? props.situation : "default"),
            ...liProps,
            "style": {
                "backgroundImage": 'url("' + props.article.urlToImage + '")', "backgroundImage": 'url("' + props.article.urlToImage + '")', backgroundSize: usedHover ? (containerRatio < articleImageRatio) ? "auto 105%" : "105%" : (containerRatio < articleImageRatio) ? "auto 100%" : "100%"
            },
        })
    }, [windowSize, props.hover ? props.hover : hover, articleImageRatio, props.article])

    return (
        <Article liProps={liProps} article={props.article} >
            {!props.situation.includes("search-news-image") &&
                <div onMouseEnter={props.hover ? undefined : handleMouseEnter} onMouseLeave={props.hover ? undefined : handleMouseLeave} className='AAA'>
                    <h3>{props.article.title}</h3>
                </div>
            }
        </Article>
    );
};

export default NewsImage;

// import React, { useEffect, useState, useContext } from 'react';
// import { WindowSizeContext } from '../Context';
// import Article from './Article';

// const NewsImage = (props) => {

//     const [hover, setHover] = useState(false)

//     const windowSize = useContext(WindowSizeContext)

//     const getArticleImageRatio = (article) => {
//         const img = new Image();
//         img.src = article.urlToImage;
//         return (img.width / img.height)
//     }

//     const liProps = {
//         "className": "news-image " + (props.situation ? props.situation : "default"),
//         "style": { ...props.style, "backgroundImage": 'url("' + props.article.urlToImage + '")', backgroundSize: hover ? ((windowSize[0] * 0.6) / (windowSize[1] * 0.7) < articleImageRatio) ? "auto 105%" : "105%" : ((windowSize[0] * 0.6) / (windowSize[1] * 0.7) < articleImageRatio) ? "auto 100%" : "100%" }
//     }

//     useEffect(() => {
//         console.log(liProps)
//         console.log(props.style)
//     }, [])

//     const handleMouseEnter = () => {
//         setHover(true)
//         console.log("Mouse enter")
//     }

//     const handleMouseLeave = () => {
//         setHover(false)
//         console.log("Mouse leave")
//     }

//     return (
//         <Article liProps={liProps} >
//             <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//                 <h3>{props.article.title}</h3>
//                 {props.situation == "switching-news" && <p>{props.article.description}</p>}
//             </div>
//         </Article>
//     );
// };

// export default NewsImage;