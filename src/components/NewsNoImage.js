import React from 'react';
import Article from './Article';

const NewsNoImage = (props) => {

    const liProps = {
        "className": "news-no-image",
    }

    return (
        <Article liProps={liProps} article={props.article} >
            <h3>{props.article.title}</h3>
        </Article>
    );
};

export default NewsNoImage;