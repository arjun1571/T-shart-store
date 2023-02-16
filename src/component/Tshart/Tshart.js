import React from 'react';
import "./Tsharts.css"

const Tshart = ({product,handleAddedPorduct}) => {
    const {picture,name,price}=product
    return (
        <div className='single-cart'>
            <img src={picture} alt="" />
            <h5>Name: {name}</h5>
            <p>price:{price}</p>
            <button onClick={()=>handleAddedPorduct(product)}>Buy this </button>
        </div>
    );
};

export default Tshart;