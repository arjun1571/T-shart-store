import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshart from '../Tshart/Tshart';
import "./Home.css"

export const RingContext = createContext("hi i am contaxt")
const Home = () => {
    const data = useLoaderData();
    const [cart,setCart]=useState([]);
    const handleAddedPorduct =(product) =>{
        const exists = cart.find(ts => ts._id === product._id);
        if(exists){
            alert("already added")
        }
        else{
            const privious = [...cart,product] 
            setCart(privious)
        }  
   }
   const RemovePorduct =(data)=>{
    const remove = cart.filter(ds => ds._id !== data._id)
    setCart(remove)
   }
   const [house,setHouse]=useState([1]);
    return (
        <RingContext.Provider value={[house,setHouse]}>
            <div className='home-container'>
            <div className='product-container'>
                    {
                        data.map(product => <Tshart handleAddedPorduct={handleAddedPorduct}  key={product._id} product={product} ></Tshart>)
                    }
            </div>
            <div className='cart-container'>
                    <Cart RemovePorduct={RemovePorduct} product={cart}></Cart>
                    
            </div>
        </div>
        </RingContext.Provider>
    );
};

export default Home;