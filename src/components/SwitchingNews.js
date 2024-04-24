import Article from './Article';
import { useImageRatio } from '../hooks/useImageRatio';

const SwitchingNews = (props) => {

    const articleImageRatio = useImageRatio(props.article.urlToImage)

    // const [articleImageRatio, setArticleImageRatio] = useState()

    // const getArticleImageRatio = (article) => {
    //     const img = new Image();
    //     img.onload = () => {
    //         setArticleImageRatio(img.width / img.height)
    //     }
    //     img.onerror = () => {

    //     }
    //     img.src = article.urlToImage;
    // }

    // useEffect(() => {
    //     getArticleImageRatio(props.article)
    // })

    const liProps = {
        "className": "news-image switching-news",
        "style": { ...props.style, "backgroundImage": 'url("' + props.article.urlToImage + '")', backgroundSize: props.hover ? (props.containerSize[0] / props.containerSize[1] < articleImageRatio) ? "auto 105%" : "105%" : (props.containerSize[0] / props.containerSize[1] < articleImageRatio) ? "auto 100%" : "100%" }
    }

    return (
        <Article liProps={liProps} article={props.article} >
            <div style={{ backdropFilter: props.hover ? "brightness(0.9)" : "brightness(0.8)" }}>
                <h3>{props.article.title}</h3>
                {props.containerSize[0] > 600 && <p>{props.article.description}</p>}
            </div>
        </Article>
    );
};

export default SwitchingNews;