import React, { useState } from 'react';

const PageSwitcher = (props) => {

    const pagesRadios = []
    for (let i = 0; i < props.size; i++) {
        pagesRadios.push(<input key={i} type="radio" name="pages-radio" className='pages-radio' value={i} onChange={props.handleChange} checked={props.pageChecked == i ? "checked" : ""} />)
    }

    return (
        <div className='page-switcher'>
            {pagesRadios}
        </div>
    );
};

export default PageSwitcher;