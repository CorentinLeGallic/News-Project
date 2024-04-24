const Logo = (props) => {

    // const [style, setStyle] = useState({
    //     "width": props.width ? props.width + props.unit : props.height * 1.09 + props.unit,
    //     "height": props.height ? props.height + props.unit : props.width * 0.91 + props.unit,
    //     "min-width": windowSize[0],
    //     "min-height": windowSize[1]
    // })

    // useEffect(() => {
    // setStyle({
    //     ...style,
    //     "min-width": windowSize[0]
    // })
    // console.log("Resize from logo ! Style widht and height : " + style["width"] + " " + style["height"] + " - Window size : " + windowSize[0] + " " + windowSize[1])
    // // const dimensions = {
    // //     style["width"] / 100 * 
    // // }
    // if (style["width"] > windowSize[0] && style["height"] > windowSize[1]) {
    //     console.log("Both >")
    //     if (windowSize[0] / windowSize[1] > 1.09) {
    //         console.log(">")
    //         setStyle({
    //             ...style,
    //             "width": windowSize[0]
    //         })
    //     } else {
    //         console.log("<")
    //         setStyle({
    //             ...style,
    //             "height": windowSize[1]
    //         })
    //     }
    // } else if (style["width"] > windowSize[0]) {
    //     console.log("Width >")
    //     setStyle({
    //         ...style,
    //         "width": windowSize[0]
    //     })
    // } else if (style["height"] > windowSize[1]) {
    //     console.log("height >");
    //     setStyle({
    //         ...style,
    //         "height": windowSize[1]
    //     })
    // }
    // }, [windowSize])

    return (
        <div className={"logo " + (props.className ? props.className + "Logo" : "")} style={props.style} />
    );
};

export default Logo;