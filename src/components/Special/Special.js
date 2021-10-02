import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Special = () => {
    // const {oraments}=props;
  const [oraments,house]=   useContext(RingContext);
//   console.log(ab)

    
    return (
        <div>
            <p>{oraments}</p>
            
            <h4>House: {house}</h4>
        </div>
    );
};

export default Special;