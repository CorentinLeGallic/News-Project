import NewsImage from './NewsImage';

const NewsImageContainer = (props) => {

    // const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight])
    // const windowSize = useContext(WindowSizeContext)
    // const [containerSize, setContainerSize] = useState([])

    // useEffect(() => {
    //     // console.log("Window resize : " + windowSize)
    //     if (windowSize[0] > 1200) {
    //         setContainerSize([1170, 200])
    //     } else if (windowSize[0] > 1000) {
    //         setContainerSize([970, 200])
    //     } else if (windowSize[0] > 800) {
    //         setContainerSize([770, 200])
    //     } else if (windowSize[0] > 600) {
    //         setContainerSize([570, 200])
    //     } else if (windowSize[0] > 400) {
    //         setContainerSize([370, 200])
    //     }
    //     // console.log(containerSize)
    // }, [windowSize])

    // const updateWindowSize = () => {
    //     setWindowSize([window.innerWidth, window.innerHeight])
    // }

    // useEffect(() => {
    //     window.addEventListener("resize", updateWindowSize)
    //     return () => {
    //         window.removeEventListener("resize", updateWindowSize)
    //     }
    // }, [])

    return (
        <ul className={props.situation + "-container news-container news-image-container"} style={{ width: props.containerSize[0] }} >
            {
                props.articles.map((article, index) => ( /* Condition ci-dessous : (si article affiché : (si hover : (si ratio fenêtre < ratio image : "auto 110%" sinon :  "110%") sinon : (si ratio fenêtre < ratio image : "auto 100%" sinon :  "100%")) sinon: 100%)*/
                    <NewsImage situation={"default " + props.situation} article={article} key={index} containerSize={{ "width": props.containerSize[0], "height": props.containerSize[1] }} />
                ))
            }
        </ul>
    );
};

export default NewsImageContainer;

// import React, { useState, useEffect, useContext } from 'react';
// import { WindowSizeContext } from '../Context';
// import NewsImage from './NewsImage';

// const NewsImageContainer = (props) => {

//     const [hover, setHover] = useState(false)
//     // const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight])
//     const windowSize = useContext(WindowSizeContext)
//     const [containerSize, setContainerSize] = useState([])

//     // const handleMouseEnter = () => {
//     //     setHover(true)
//     // }

//     // const handleMouseLeave = () => {
//     //     setHover(false)
//     // }

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

//     // const updateWindowSize = () => {
//     //     setWindowSize([window.innerWidth, window.innerHeight])
//     // }

//     // useEffect(() => {
//     //     window.addEventListener("resize", updateWindowSize)
//     //     return () => {
//     //         window.removeEventListener("resize", updateWindowSize)
//     //     }
//     // }, [])

//     // const getArticleImageRatio = (article) => {
//     //     const img = new Image();
//     //     img.src = article.urlToImage;
//     //     return (img.width / img.height)
//     // }

//     return (
//         <ul className={props.situation + "-container"} >
//             {
//                 props.articles.map((article, index) => ( /* Condition ci-dessous : (si article affiché : (si hover : (si ratio fenêtre < ratio image : "auto 110%" sinon :  "110%") sinon : (si ratio fenêtre < ratio image : "auto 100%" sinon :  "100%")) sinon: 100%)*/
//                     <NewsImage situation={"default " + props.situation} article={article} key={index} />
//                 ))
//             }
//         </ul>
//     );
// };

// export default NewsImageContainer;