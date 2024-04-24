import React, { useEffect } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

const SearchLoadingPage = ({ animation, loaderCounter }) => {

    const windowSize = useWindowSize()

    // useEffect(() => {
    //     console.log(loaderCounter)
    // }, [loaderCounter])

    useEffect(() => {
        console.warn("SearchLoadingPage update !")
        console.log("Window height : " + window.innerHeight)
    }, [])

    return (
        <div className="search-loading-page" style={{ height: windowSize.height }}>
            {!animation ? (
                <div className="loading-text">
                    <h3>Chargement</h3>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
            ) : (
                <div className="loading-text">
                    <h3>Chargement terminé !</h3>
                </div>
            )}
            {/* <div className={"preloader" + (animation ? " active" : "")}></div> */}
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                    className="preloaderSVG"
                >
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="#FFF" />
                            <stop offset="100%" stopColor="#FFF" />
                        </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="50" strokeLinecap="round" style={{ strokeDashoffset: 314 - (314 * loaderCounter) / 100 }} />
                </svg>
                <img src="./medias/checkMark.png" className={"preloader-img" + (animation ? " active" : "")} alt="" />
            </div>
        </div>
    );
};

export default SearchLoadingPage;

// Idée : animation tourne en rond, puis une fois le chargement terminé, l'animation rétrécit et laisse apparaitre un :white_check_mark:
