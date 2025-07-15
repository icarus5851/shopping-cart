import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext(null)

export function CartProvider({children}){
    
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const updateQuantity = (id,selectedSize, newQuantity) => {
        if(newQuantity===0){
            removeFromCart(id,selectedSize);
            return;
        }
        else if(newQuantity>10){
            return;
        }
        setCartItems((prev) =>
            prev.map(item =>
            (item.id === id && item.selectedSize === selectedSize)? { ...item, quantity: newQuantity } : item)
        );
    };

    const addToCart = (product, selectedSize = "S", quantity = 1) => {
        setCartItems(prev => {
            return prev.map(item => {
            if (item.id === product.id && item.selectedSize === selectedSize) {
                return { ...item, quantity: item.quantity + quantity };
            }
            return item;
            }).some(item => item.id === product.id && item.selectedSize === selectedSize)
            ? prev.map(item =>
                item.id === product.id && item.selectedSize === selectedSize
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
                )
            : [...prev, { ...product, selectedSize, quantity }];
        });
    };

    const removeFromCart = (id, selectedSize) => {
        setCartItems(prev =>
            prev.filter(item => !(item.id === id && item.selectedSize === selectedSize))
        );
    };

	const getTotal = (cartItems) => {
		return cartItems.reduce((sum, item) => {
			return sum + item.price * item.quantity;
		}, 0);
	};
	const getSubtotal = (cartItems) => {
        return cartItems.reduce((sum, item) => {
            return sum + item.originalPrice * item.quantity;
        }, 0);
	};
    const getDiscount = (cartItems) => {
        return getSubtotal(cartItems) - getTotal(cartItems);
	};



    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity ,getTotal,getSubtotal,getDiscount }}>
            {children}
        </CartContext.Provider>
    );


}



