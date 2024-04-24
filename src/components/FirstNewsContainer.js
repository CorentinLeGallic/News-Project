import React from 'react';
import NewsImageContainer from './NewsImageContainer';

const FirstNewsContainer = (props) => {
    return (
        <NewsImageContainer {...props} situation="first-news" />
    );
};

export default FirstNewsContainer;