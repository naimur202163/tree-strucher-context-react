import React from 'react';
import Special from '../Special/Special';

const MySelf = (props) => {
    const {house,oraments}=props
    return (
        <div>
            <h2>My Self</h2>
            <h5>house : {house}</h5>
            <h5></h5>
            <Special ></Special>
        </div>
    );
};

export default MySelf;