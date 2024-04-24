import { useState, useEffect } from 'react';
import axios from "axios";

export function useDataRequest(url = "https://newsapi.org/v2/everything?q=*&sortBy=publishedAt&apiKey={YOUR_API_KEY}&language=fr&pageSize=100") {
    const [imageArticles, setImageArticles] = useState([])
    const [noImageArticles, setNoImageArticles] = useState([])
    const [dataCounter, setDataCounter] = useState(0)
    const [dataNumber, setDataNumber] = useState(0)

    const handleDataUpdate = () => {
        setDataCounter(counter => {
            // console.log("Counter : " + (counter + 1))
            return (counter + 1)
        });
    }

    useEffect(() => {
        axios.get(url).then((result) => {
            // console.log("Data request with url " + url + " :")
            // console.log(result)
            setDataNumber(result.data.articles.length)
            let withImage = [];
            let withoutImage = [];
            (() => {
                return new Promise((resolve) => {
                    let counter = 0;
                    result["data"]["articles"].forEach((article, index) => {
                        // setTimeout(() => {
                        // console.log("index : " + index)
                        let isAlready = false
                        for (const articleCheck of withImage.concat(withoutImage)) {
                            if (articleCheck.title == article.title) {
                                // console.log("articleCheck.title : " + articleCheck.title + " - " + 'article.title : ' + article.title + " - " + (articleCheck.title == article.title))
                                isAlready = true
                                break;
                            }
                        }
                        if (isAlready) {
                            // console.log("Already in array ! " + article.title)
                            counter += 1;
                            handleDataUpdate()
                            // console.log("is already : " + counter + " " + index)
                            return;
                        } else {
                            if (article.urlToImage) {
                                withImage.push(article)
                                const img = new Image();
                                img.onload = () => {
                                    counter += 1;
                                    handleDataUpdate()
                                    // console.log("Correctly loaded : " + counter + " " + index)
                                    if (counter == result["data"]["articles"].length) {
                                        // if (counter == result["data"]["articles"].length - withoutImage.length) {
                                        resolve({ status: 'finished' })
                                        // console.log("Finished resolve : " + counter + " - " + (result["data"]["articles"].length - withoutImage.length) + " - " + withoutImage.length)
                                    }
                                }
                                img.onerror = () => {
                                    counter += 1;
                                    handleDataUpdate()
                                    // console.log("Error with an image !")
                                    // console.log(withImage)
                                    // console.log(withImage.indexOf(article))
                                    // console.log(withImage.slice(0, withImage.indexOf(article)).concat(withImage.slice(withImage.indexOf(article) + 1)))
                                    withImage = withImage.slice(0, withImage.indexOf(article)).concat(withImage.slice(withImage.indexOf(article) + 1))
                                    noImageArticles.push(article)
                                    // console.log(withImage)
                                    // console.log("Error : " + counter + " " + index)
                                    if (counter == result["data"]["articles"].length) {
                                        // if (counter == result["data"]["articles"].length - withoutImage.length) {
                                        resolve({ status: 'finished' })
                                        // console.log("Finished resolve")
                                    }
                                }
                                img.src = article.urlToImage;
                            } else {
                                // console.log("Without image !")
                                counter += 1;
                                handleDataUpdate()
                                withoutImage.push(article)
                            }
                        }
                        // }, 100 * index)
                    });
                })
            })().then(() => {
                // console.log("Data request ended !")
                // console.log(withImage)
                // console.log(withoutImage)
                setImageArticles(withImage)
                setNoImageArticles(withoutImage)
                // console.log("Finished !")
                // console.log(withImage.length + withoutImage.length)
                // props.handleDataLoaded()
                // 
            })
        })
    }, [])

    return {
        "imageArticles": imageArticles,
        "noImageArticles": noImageArticles,
        "dataCounter": dataCounter,
        "dataNumber": dataNumber,
    }
}