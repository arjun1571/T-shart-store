import React from 'react';

const Cart = ({product,RemovePorduct}) => {
    return (
        <div>
            <h1>item added : {product.length}</h1>
            <p>{product.name}</p>
                    {
                        product.map(ct=> <li  key={ct._id}>{ct.name} <button onClick={()=>RemovePorduct(ct)}>X</button></li>)
                    }
        </div>
    );
};

export default Cart;