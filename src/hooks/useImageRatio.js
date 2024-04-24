import { useState, useEffect } from 'react';

export function useImageRatio(urlToImage) {

    const [imageRatio, setImageRatio] = useState()


    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageRatio(img.width / img.height)
        }
        img.src = urlToImage;
    }, [])

    return imageRatio;
}