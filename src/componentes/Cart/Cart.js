import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UseCartContext } from "../../CartContext/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import './Cart.css'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Gracias from "../Alerts/Gracias";
import Img from "../Img/Img";



const Cart = () => {
    const {cart, totalPrice} = UseCartContext();

    
    if (cart.length === 0) {
        return(
            <>
                <div className="loguito-cart">
                <img alt="logo" src="../cartempty.png"/>
                <p className="carrito-vacio">El carrito está vacío</p>
                </div>

                <Link to='/'>
                    
                <Button variant="primary" className="realizar-compra">Realizar compras</Button>
                </Link>
            </>
        ); 
    
}

const SendOrder = (e) =>{
    e.preventDefault();

    const order = {

        buyer:{
        name: e.target[0].value,
        apellido: e.target[1].value,
        email: e.target[2].value,
        dirección: e.target[3].value,
        CP: e.target[4].value,
        
    },    
    item: cart.map (item => ({id: item.id, title: item.title, price: item.price, quantity: item.quantity})),
    total: totalPrice(),    
    
}

const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)  
    .then(({id}) => console.log (id))
    console.log(order) 
    
}

return (
  <>
    {cart.map((product) => (
      <ItemCart key={product.id} product={product} />
    ))}
    <div className="background-image">
      <p className="total-price">Total: $ {totalPrice()}</p>
      <hr></hr>
      <h2 className="titulo-orden">COMPLETA TUS DATOS PARA LA COMPRA</h2>

      <Form onSubmit={SendOrder} className="container mt-5 mb-5 form-orden">
        <Row className="mb-3">
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu Nombre"
              name="name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu Apellido"
              apellido="apellido"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu Email"
              email="email"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              placeholder="Dirección"
              dirección="dirección"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>CP</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu Código Postal"
              CP="CP"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        <Img/>
        </Row>
        

        <Button onClick={Gracias} type="submit" variant="primary" className="button-compra">
          Terminar compra
        </Button>

      </Form>

        
      

    </div>
  </>

    
  

);
}

export default Cart;