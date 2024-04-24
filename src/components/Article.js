import React from 'react';

const Article = (props) => {

    const handleClick = () => {
        window.open(props.article.url, '_blank');
        // navigate("/article?name=" + encodeURIComponent(encodeURIComponent(props.article.title)))
    }

    return (
        <li {...props.liProps} className={props.liProps.className + " article"} onClick={handleClick}>
            {props.children}
        </li>
    );
};

export default Article;