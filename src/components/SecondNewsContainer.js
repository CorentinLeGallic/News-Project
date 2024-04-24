import React from 'react';
import NewsImageContainer from './NewsImageContainer';

const SecondNewsContainer = (props) => {
    return (
        <NewsImageContainer {...props} situation="second-news" />
    );
};

export default SecondNewsContainer;