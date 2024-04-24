import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = (props) => {

    const navigate = useNavigate();

    const style = {
        ...props.style,
    }
    const [textValue, setTextValue] = useState("")

    // useEffect(() => {
    //     console.log(props)
    //     console.log(props.eventsHandlers)
    //     // console.log({ ...(props.eventsHandlers && props.eventshandlers) })
    // }, [])

    // useEffect(() => {
    //     console.log(props.style)
    // }, [])

    // const handleScroll = () => {
    //     if (window.scrollY < window.innerHeight) {
    //         setStyle({
    //             ...style,
    //             "marginTop": `${-(20 - (window.scrollY * (20) / window.innerHeight))}vh`
    //         })
    //     } else {
    //         setStyle({
    //             ...style,
    //             "marginTop": "-20vh"
    //         })
    //     }
    // }

    // useEffect(() => {
    //     // setStyle({

    //     // }
    //     if (props.situation == "home") {
    //         // setStyle({
    //         //     ...style,
    //         //     "marginTop": "-20vh"
    //         // })
    //         window.addEventListener('scroll', handleScroll);
    //         return () => {
    //             window.removeEventListener('scroll', handleScroll);
    //         }
    //     }
    // }, [])

    // useEffect(() => {
    //     console.log("Style :")
    //     console.log(style)
    // }, [style])

    // const handleClick = () => {
    //     if (window.scrollY < window.innerHeight) {
    //         window.scrollTo(0, window.innerHeight)
    //     }
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate("/search?q=" + encodeURIComponent(encodeURIComponent(textValue)))
        // console.log("Text value : " + textValue)
        // console.log("URL text value : " + encodeURIComponent(textValue))
    }

    const handleChange = (event) => {
        // console.log(event)
        // console.log("Change : " + event.target.value)
        setTextValue(event.target.value)
    }

    return (
        <form action="" className={`search-bar ${props.situation ? props.situation : "default"}`} style={style} onSubmit={handleSubmit} >
            <input type="submit" value="" />
            <input type="text" onChange={handleChange} value={textValue} id="" placeholder='Rechercher une actualité...' {...props.eventsHandlers} />
        </form>
    );
};

export default SearchBar;

// margin-top = window.scrollY*(-20)/window.innerHeight 