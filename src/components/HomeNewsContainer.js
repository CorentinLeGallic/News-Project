import React, { useEffect, useState } from 'react';
import SwitchingNewsContainer from './SwitchingNewsContainer';
import SectionTitle from './SectionTitle';
import FirstNewsContainer from './FirstNewsContainer';
import SecondNewsContainer from './SecondNewsContainer';
import NewsNoImageContainer from './NewsNoImageContainer';
import { useWindowSize } from '../hooks/useWindowSize.js';
import { useDataRequest } from '../hooks/useDataRequest';

const HomeNewsContainer = (props) => {

    const dataRequest = useDataRequest()

    // const [dataRequest.imageArticles, setdataRequest.ImageArticles] = useState(dataRequest.dataRequest.imageArticles)
    // const [dataRequest.noImageArticles, setdataRequest.noImageArticles] = useState(dataRequest.dataRequest.noImageArticles)

    const windowSize = useWindowSize()
    const [containerSize, setContainerSize] = useState([])

    // useEffect(() => {
    //     // console.log("Data request edit !")
    //     // console.log(dataRequest)
    // }, [dataRequest])

    useEffect(() => {
        // console.log("dataCounter : " + dataRequest.dataCounter)
        props.handleDataUpdate(dataRequest.dataCounter)
    }, [dataRequest.dataCounter])

    useEffect(() => {
        // console.log("dataCounter : " + dataRequest.dataCounter)
        props.setDataNumber(dataRequest.dataNumber)
    }, [dataRequest.dataNumber])

    // useEffect(() => {
    //     axios.get("https://newsapi.org/v2/everything?q=*&sortBy=publishedAt&apiKey=d958c4dab3fa494c924a59e95fdd1c32&language=fr&pageSize=100").then((result) => {
    //         // console.log(result)
    //         let withImage = [];
    //         let withoutImage = [];
    //         (() => {
    //             return new Promise((resolve) => {
    //                 let counter = 0;
    //                 result["data"]["articles"].forEach((article, index) => {
    //                     // setTimeout(() => {
    //                     // console.log("index : " + index)
    //                     let isAlready = false
    //                     for (const articleCheck of withImage.concat(withoutImage)) {
    //                         if (articleCheck.title == article.title) {
    //                             // console.log("articleCheck.title : " + articleCheck.title + " - " + 'article.title : ' + article.title + " - " + (articleCheck.title == article.title))
    //                             isAlready = true
    //                             break;
    //                         }
    //                     }
    //                     if (isAlready) {
    //                         // console.log("Already in array ! " + article.title)
    //                         counter += 1;
    //                         props.handleDataLoaded(counter)
    //                         // console.log("is already : " + counter + " " + index)
    //                         return;
    //                     } else {
    //                         if (article.urlToImage) {
    //                             withImage.push(article)
    //                             const img = new Image();
    //                             img.onload = () => {
    //                                 counter += 1;
    //                                 props.handleDataLoaded(counter)
    //                                 // console.log("Correctly loaded : " + counter + " " + index)
    //                                 if (counter == result["data"]["articles"].length - withoutImage.length) {
    //                                     resolve({ status: 'finished' })
    //                                 }
    //                             }
    //                             img.onerror = () => {
    //                                 counter += 1;
    //                                 props.handleDataLoaded(counter)
    //                                 // console.log("Error with an image !")
    //                                 // console.log(withImage)
    //                                 // console.log(withImage.indexOf(article))
    //                                 // console.log(withImage.slice(0, withImage.indexOf(article)).concat(withImage.slice(withImage.indexOf(article) + 1)))
    //                                 withImage = withImage.slice(0, withImage.indexOf(article)).concat(withImage.slice(withImage.indexOf(article) + 1))
    //                                 dataRequest.noImageArticles.push(article)
    //                                 // console.log(withImage)
    //                                 // console.log("Error : " + counter + " " + index)
    //                                 if (counter == result["data"]["articles"].length - withoutImage.length) {
    //                                     resolve({ status: 'finished' })
    //                                 }
    //                             }
    //                             img.src = article.urlToImage;
    //                         } else {
    //                             // console.log("Without image !")
    //                             counter += 1;
    //                             props.handleDataLoaded(counter)
    //                             withoutImage.push(article)
    //                         }
    //                     }
    //                     // }, 500 * index)
    //                 });
    //             })
    //         })().then(() => {
    //             setdataRequest.ImageArticles(withImage)
    //             setdataRequest.noImageArticles(withoutImage)
    //             console.log("Finished !")
    //             console.log(withImage.length + withoutImage.length)
    //             // props.handleDataLoaded()
    //         })
    //     })
    // }, [])

    useEffect(() => {
        if (windowSize.width > 1200) {
            setContainerSize([1170, 200])
        } else if (windowSize.width > 1000) {
            setContainerSize([970, 200])
        } else if (windowSize.width > 800) {
            setContainerSize([770, 200])
        } else if (windowSize.width > 600) {
            setContainerSize([570, 200])
        } else if (windowSize.width > 400) {
            setContainerSize([370, 200])
        } else if (windowSize.width > 300) {
            setContainerSize([270, 200])
        } else if (windowSize.width > 200) {
            setContainerSize([170, 200])
        }
    }, [windowSize])

    return (
        <div className='home-news-container' style={{ width: containerSize[0] }}>
            <SectionTitle title="Les plus récentes" />
            <SwitchingNewsContainer containerSize={containerSize} articles={dataRequest.imageArticles.slice(0, 7)} />
            <SectionTitle title="Autres actualités" />
            <FirstNewsContainer containerSize={containerSize} articles={dataRequest.imageArticles.slice(7, 19)} />
            <SectionTitle title="En bref" />
            <SecondNewsContainer containerSize={containerSize} articles={dataRequest.imageArticles.slice(20, 44)} />
            <NewsNoImageContainer containerSize={containerSize} articles={dataRequest.noImageArticles.concat(dataRequest.imageArticles.slice(45, 69 - dataRequest.noImageArticles.length))} />
        </div>
    );
};

export default HomeNewsContainer;