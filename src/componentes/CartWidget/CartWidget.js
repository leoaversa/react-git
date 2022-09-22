import './CartWidget.css'
import { UseCartContext } from "../../CartContext/CartContext";


export const CartWidget = () => {
    const{totalProducts} = UseCartContext();
    
    return(
        <>
        <i className="bi bi-cart3"></i>
        <span className='cart-number'>{totalProducts() || ''}</span>
        
        </>
    );
}

export default CartWidget;
