import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UseCartContext } from "../../CartContext/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import './Cart.css'
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const {cart, totalPrice} = UseCartContext();

    const order = {
        buyer:{
        name: 'Leo',
        email: 'aversaleonardo@hotmail.com',
        phone: '1234-5678',
        address: 'Melmac 123'
    },
    item: cart.map (item => ({id: item.id, title: item.title, price: item.price, quantity: item.quantity})),
    total: totalPrice(),
}

    const handleClick = () =>{
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)  
    .then(({id}) => console.log (id))  


    }

    if (cart.length === 0) {
        return(
            <>
                <div className="loguito-cart">
                <img alt="logo" src="../cartempty.png"/>
                <p className="carrito-vacio">El carrito está vacío</p>
                </div>

                <Link to='/' className="realizar-compra">
                    
                <Button variant="primary">Realizar compras</Button>
                </Link>
            </>
        ); 
    
}
return(
    <>
    
    {
        cart.map(product => <ItemCart key= {product.id} product={product}/>)
    }
    <div>
    <p className="total-price">
        Total: {totalPrice()}
        </p>

        <Button onClick={handleClick} variant="primary">Terminar compra</Button>
        
    </div>
        
    </>
    );
}

export default Cart;