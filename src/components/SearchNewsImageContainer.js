import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../hooks/useWindowSize.js';
import NewsImage from './NewsImage';

const SearchNewsImageContainer = (props) => {

    // const navigate = useNavigate()

    // const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight])
    const windowSize = useWindowSize()
    const [containerSize, setContainerSize] = useState([])

    const [articleHover, setArticleHover] = useState(-1)

    const handleMouseEnter = (articleIndex) => {
        setArticleHover(articleIndex)
        // console.log("Article mouse enter")
    }

    const handleMouseLeave = (articleIndex) => {
        if (articleHover == articleIndex) {
            setArticleHover(-1)
        }
        // console.log("Article mouse leave")
    }

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

    // useEffect(() => {
    //     console.log(props.articles)
    // }, [props.articles])

    const handleClick = (article) => {
        // console.log(event.target.textContent)
        window.open(article.url, '_blank');
    }

    return (
        <ul className={"search-news-image-container" + (props.active ? " active" : "")} style={{ width: containerSize[0] }} >
            {
                props.articles.map((article, index) => ( /* Condition ci-dessous : (si article affiché : (si hover : (si ratio fenêtre < ratio image : "auto 110%" sinon :  "110%") sinon : (si ratio fenêtre < ratio image : "auto 100%" sinon :  "100%")) sinon: 100%)*/
                    <div key={index} onClick={() => handleClick(article)} className={"search-news-image-div" + ((index == articleHover) ? " active" : "")} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
                        <NewsImage hover={index == articleHover ? true : false} situation={"default " + "search-news-image"} article={article} key={index} containerSize={{ "width": containerSize[0], "height": containerSize[1] }} />
                        <div>
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                            {/* <h3 onClick={() => handleClick(article)}>{article.title}</h3>
                            <p onClick={() => handleClick(article)}>{article.description}</p> */}
                        </div>
                    </div>
                ))
            }
        </ul>
    );
};

export default SearchNewsImageContainer;