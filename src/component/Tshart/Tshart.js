import React, { useContext } from 'react';
import { RingContext } from '../Home/Home';
import "./Tsharts.css"



const Tshart = ({product,handleAddedPorduct}) => {
    const [cart]=useContext(RingContext);
    console.log(cart);
    
    const {picture,name,price}=product
    return (
        <div className='single-cart'>
            <img src={picture} alt="" />
            <h5>Name: {name}</h5>
            <p>price:{price}</p>
            <button onClick={()=>handleAddedPorduct(product)}>Buy this </button>
            {/* <p>{house}</p> */}
            {/* <button onClick={()=>setHouse(+house + 1)}>increise</button> */}
        </div>
    );
};

export default Tshart;