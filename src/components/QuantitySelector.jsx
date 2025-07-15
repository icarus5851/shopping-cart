import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'

function QuantitySelector({ id,selectedSize, quantity }) {
    const {updateQuantity} = useContext(CartContext);
    return (
            <div className="inline-flex items-center gap-1 overflow-hidden w-fit">
                
                <button className="bg-zinc-900 text-white px-3 py-1 rounded-sm cursor-pointer transition"
                    onClick={() =>  updateQuantity(id,selectedSize, quantity - 1)}>
                    −
                </button>
                <span className="w-9 text-center py-1 border border-black rounded-md">{quantity}</span>
                <button className="bg-zinc-900 text-white px-3 py-1 rounded-sm cursor-pointer transition" 
                    onClick={() =>  updateQuantity(id,selectedSize, quantity + 1)}>
                    +
                </button>
            </div>
    );
}

export default QuantitySelector