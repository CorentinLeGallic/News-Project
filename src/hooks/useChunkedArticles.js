import { useState, useEffect } from 'react';

export function useChunkedArticles(datas, perChunk) {

    const [chunkedArticles, setChunkedArticles] = useState([]);

    // useEffect(() => {
    // console.log("chunked articles update :")
    // console.log(chunkedArticles)
    // }, [chunkedArticles])

    useEffect(() => {
        // console.log("useChunked articles imageArticles update")
    }, [datas.imageArticles])

    useEffect(() => {
        // console.log("Data request image articles update in useChunkedDatas !")
        // console.log(datas.dataCounter)
        // console.log(datas.dataNumber)
        if (datas.dataCounter >= datas.dataNumber) {
            // console.log(">= 100")
            const result = Array.from({ length: Math.ceil(datas.imageArticles.length / perChunk) }, (v, i) =>
                datas.imageArticles.slice(i * perChunk, i * perChunk + perChunk)
            )
            // console.log('result')
            // console.log('result : ' + result)
            // console.log(result)
            // console.log()
            setChunkedArticles(result)
            // datas.imageArticles.reduce((resultArray, item, index) => {
            // const chunkIndex = Math.floor(index / perChunk)
            // console.log(item)

            // if (!resultArray[chunkIndex]) {
            //     resultArray[chunkIndex] = [] // start a new chunk
            // }

            // resultArray[chunkIndex].push(item)

            // console.log(resultArray)
            // return resultArray
            // }, [])
            // Array.from({ length: Math.ceil(datas.imageArticles.length / perChunk) }, (v, i) =>
            //     datas.imageArticles.slice(i * perChunk, i * perChunk + perChunk)
            // )
            // console.log(">= 100 bis !")
        }
    }, [datas.imageArticles])

    return chunkedArticles;
}

// Array.from({ length: Math.ceil(arr.length / perChunk) }, (v, i) =>
//     arr.slice(i * perChunk, i * perChunk + perChunk)
// );