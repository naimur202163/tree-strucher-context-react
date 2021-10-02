import React from 'react';
import Anit from '../Anti/Anit';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const GrandFather = (props) => {
    const{house,oraments}=props
    return (
        <div>
            <h2 >This Grand Father</h2>
            <h5>House : {house}</h5>
            <div style={{display:"flex"}}>
            <Father house={house}>

</Father>
<Uncle house={house}></Uncle>
<Anit house={house}></Anit>

            </div>
          
        </div>
    );
};

export default GrandFather;