import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Anit = () => {
    const [oraments,house]=useContext(RingContext)

    return (
        <div>
            <h2>House {house}</h2>
            <p></p>
            <p>{oraments}</p>
        </div>
    );
};

export default Anit;