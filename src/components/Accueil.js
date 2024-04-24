import React from 'react';
import HomeLogo from './HomeLogo';

const Accueil = (props) => {

    return (
        <div className='accueil'>
            <HomeLogo />
            {props.children}
            {/* <Logo height="50" unit="vh" /> */}
        </div>
    );
};

export default Accueil;