import React, { useEffect, useState } from "react";
import SearchResultsTitle from "./SearchResultsTitle";
import SearchNewsImageContainer from "./SearchNewsImageContainer";
import PageSwitcher from "./PageSwitcher";
import { useDataRequest } from "../hooks/useDataRequest";
import { url } from "jsdom-jscore-rn/lib/builtins";
import { useChunkedArticles } from "../hooks/useChunkedArticles";
// import { useDidMountEffect } from "../hooks/useDidMountEffect";

const SearchResultsContainer = ({ search, handleDataUpdate, setDataNumber }) => {

    const dataRequest = useDataRequest(url = `https://newsapi.org/v2/everything?q=${search}&sortBy=relevancy&apiKey=d958c4dab3fa494c924a59e95fdd1c32&language=fr&pageSize=100`)

    const [imageArticles, setImageArticles] = useState(dataRequest.imageArticles)
    const [noImageArticles, setNoImageArticles] = useState(dataRequest.noImageArticles)

    // let location = useLocation()
    // const searchParams = new URLSearchParams(location.search);

    // const search = decodeURIComponent(searchParams.get("q"));

    useEffect(() => {
        handleDataUpdate(dataRequest.dataCounter)
    }, [dataRequest.dataCounter])

    useEffect(() => {
        // console.log("dataCounter : " + dataRequest.dataCounter)
        setDataNumber(dataRequest.dataNumber)
    }, [dataRequest.dataNumber])

    // useEffect(() => {
    // console.log("Data request image articles update !")
    // console.log(dataRequest.imageArticles)
    // }, [dataRequest.imageArticles])

    const handleChange = (event) => {
        setPageChecked(Number(event.target.value))
    }

    const [pageChecked, setPageChecked] = useState(0)

    const chunkedArticles = useChunkedArticles(dataRequest, 20);

    // useEffect(() => {
    // console.log("Chunked articles update :")
    // console.log(chunkedArticles)
    // }, [chunkedArticles])
    // const [chunkedArticles, setChunkedArticles] = useState([]);
    // const perChunk = 20;

    // useEffect(() => {
    //     console.log(dataRequest.dataCounter)
    //     console.log(dataRequest.dataNumber)
    //     if (dataRequest.dataCounter >= dataRequest.dataNumber) {
    //         console.log(">= 100")
    //         setChunkedArticles(dataRequest.imageArticles.reduce((resultArray, item, index) => {
    //             const chunkIndex = Math.floor(index / perChunk)
    //             console.log(item)

    //             if (!resultArray[chunkIndex]) {
    //                 resultArray[chunkIndex] = [] // start a new chunk
    //             }

    //             resultArray[chunkIndex].push(item)

    //             console.log(resultArray)
    //             return resultArray
    //         }, []))
    //     }
    // }, [dataRequest.imageArticles])

    // useEffect(() => {
    //     console.log("Update imageArticles :")
    //     console.log(dataRequest.imageArticles)
    // }, [dataRequest.imageArticles])

    // useEffect(() => {
    //     console.log("chunkedArticles :")
    //     console.log(chunkedArticles)
    // }, [chunkedArticles])

    // useEffect(() => {
    //     console.clear()
    //     axios.get("https://newsapi.org/v2/everything?q=" + search + "&sortBy=publishedAt&apiKey=d958c4dab3fa494c924a59e95fdd1c32&language=fr&pageSize=100").then((result) => {
    //         console.log("GOT DATAS !")
    //         let withImage = [];
    //         let withoutImage = [];
    //         (() => {
    //             return new Promise((resolve) => {
    //                 let counter = 0;
    //                 result["data"]["articles"].forEach((article, index) => {
    //                     let isAlready = false
    //                     for (const articleCheck of withImage.concat(withoutImage)) {
    //                         if (articleCheck.title == article.title) {
    //                             console.log("articleCheck.title : " + articleCheck.title + " - " + 'article.title : ' + article.title + " - " + (articleCheck.title == article.title))
    //                             isAlready = true
    //                             break;
    //                         }
    //                     }
    //                     if (isAlready) {
    //                         counter += 1;
    //                         console.log("is already : " + counter)
    //                         return;
    //                     } else {
    //                         if (article.urlToImage) {
    //                             withImage.push(article)
    //                             const img = new Image();
    //                             img.onload = () => {
    //                                 counter += 1;
    //                                 console.log("Correctly loaded : " + counter)
    //                                 if (counter == result["data"]["articles"].length - withoutImage.length) {
    //                                     resolve({ status: 'finished' })
    //                                 }
    //                             }
    //                             img.onerror = () => {
    //                                 counter += 1;
    //                                 withImage = withImage.slice(0, withImage.indexOf(article)).concat(withImage.slice(withImage.indexOf(article) + 1))
    //                                 noImageArticles.push(article)
    //                                 if (counter == result["data"]["articles"].length - withoutImage.length) {
    //                                     console.log("Error : " + counter)
    //                                     resolve({ status: 'finished' })
    //                                 }
    //                             }
    //                             img.src = article.urlToImage;
    //                         } else {
    //                             counter += 1;
    //                             withoutImage.push(article)
    //                         }
    //                     }
    //                 });
    //             })
    //         })().then(() => {
    //             // console.log("Finished !")
    //             setImageArticles(withImage)
    //             setNoImageArticles(withoutImage)
    //             // console.log(withImage)
    //             // console.log(withoutImage)
    // setChunkedArticles(withImage.reduce((resultArray, item, index) => {
    //     const chunkIndex = Math.floor(index / perChunk)

    //     if (!resultArray[chunkIndex]) {
    //         resultArray[chunkIndex] = [] // start a new chunk
    //     }

    //     resultArray[chunkIndex].push(item)

    //     return resultArray
    // }, []))
    //         })
    //     })
    //     // }, [location])
    // }, [search])

    // useEffect(() => {
    //     console.log(imageArticles)
    // }, [imageArticles])

    return (
        <div className="search-results-container">
            <SearchResultsTitle request={search} resultsNumber={dataRequest.dataCounter} />
            {
                chunkedArticles.map((articles, index) => (
                    index == pageChecked && <SearchNewsImageContainer key={index} articles={articles} active={index == pageChecked} />
                ))
            }
            {/* <SearchNewsImageContainer articles={imageArticles.slice(0, 20)} /> */}
            <PageSwitcher size={chunkedArticles.length} handleChange={handleChange} pageChecked={pageChecked} />
        </div>
    );
};

export default SearchResultsContainer;

// useEffect(() => {
//     axios.get("https://newsapi.org/v2/everything?q=*&sortBy=publishedAt&apiKey=d958c4dab3fa494c924a59e95fdd1c32&language=fr&pageSize=100").then((result) => {
//         console.log(result)
//         let withImage = [];
//         let withoutImage = [];
//         (() => {
//             return new Promise((resolve) => {
//                 let counter = 0;
//                 result["data"]["articles"].forEach((article, index) => {
//                     let isAlready = false
//                     for (const articleCheck of withImage.concat(withoutImage)) {
//                         if (articleCheck.title == article.title) {
//                             console.log("articleCheck.title : " + articleCheck.title + " - " + 'article.title : ' + article.title + " - " + (articleCheck.title == article.title))
//                             isAlready = true
//                             break;
//                         }
//                     }
//                     if (isAlready) {
//                         // console.log("Already in array ! " + article.title)
//                         counter += 1;
//                         console.log("is already : " + counter)
//                         return;
//                     } else {
//                         if (article.urlToImage) {
//                             withImage.push(article)
//                             const img = new Image();
//                             img.onload = () => {
//                                 counter += 1;
//                                 console.log("Correctly loaded : " + counter)
//                                 if (counter == result["data"]["articles"].length - withoutImage.length) {
//                                     resolve({ status: 'finished' })
//                                 }
//                             }
//                             img.onerror = () => {
//                                 counter += 1;
//                                 // console.log("Error with an image !")
//                                 // console.log(withImage)
//                                 // console.log(withImage.indexOf(article))
//                                 // console.log(withImage.slice(0, withImage.indexOf(article)).concat(withImage.slice(withImage.indexOf(article) + 1)))
//                                 withImage = withImage.slice(0, withImage.indexOf(article)).concat(withImage.slice(withImage.indexOf(article) + 1))
//                                 noImageArticles.push(article)
//                                 // console.log(withImage)
//                                 if (counter == result["data"]["articles"].length - withoutImage.length) {
//                                     console.log("Error : " + counter)
//                                     resolve({ status: 'finished' })
//                                 }
//                             }
//                             img.src = article.urlToImage;
//                         } else {
//                             // console.log("Without image !")
//                             // counter += 1;
//                             withoutImage.push(article)
//                         }
//                     }
//                 });
//             })
//         })().then(() => {
//             console.log("Finished !")
//             // console.log("Final withImage ! ")
//             // console.log(withImage)
//             setImageArticles(withImage)
//             setNoImageArticles(withoutImage)
//         })