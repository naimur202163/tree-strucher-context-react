import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../Myself/MySelf';
import Sister from '../Sister/Sister';

const Father = (props) => {
    const {house,oraments}=props
    return (
        <div>
            <h2>This Is Father</h2>
            <h5>House : {house}</h5>
            <div style={{display:"flex"}}>
            <MySelf house={house} ></MySelf>
            <Brother></Brother>
            <Sister></Sister>
            </div>
           
        </div>
    );
};

export default Father;