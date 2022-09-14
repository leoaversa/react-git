
import { useState, useContext } from "react";
import React from "react";

const CartContext = React.createContext([]);

export const UseCartContext = () => useContext(CartContext);


const CartProvider = ({children}) => {
const [cart, setCart] = useState([]);

const addItem = (item, quantity) =>{
    if (isInCart(item.id)){
        setCart(cart.map(product =>{
            return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
        }));
    } else {
        setCart([...cart, {...item,quantity}]);
    }
}

console.log('carrito:', cart);




const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
}

const totalProducts = () => cart.reduce ((acumulador, productoActual) => acumulador + productoActual.quantity,0);

const clearCart = () => setCart([]);

const isInCart = (id) => cart.find(item => item.id ===id) ? true : false;

const removeItem = (id) => setCart(cart.filter(item => item.id !== id));




    return(
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeItem,
            addItem, 
            totalPrice,
            totalProducts,
            cart
        }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartProvider