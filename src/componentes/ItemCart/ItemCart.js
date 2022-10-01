import { Button } from "react-bootstrap";
import { UseCartContext } from "../../CartContext/CartContext";

import "./ItemCart.css";
import Swal from "sweetalert2";
  import 'react-toastify/dist/ReactToastify.css';


const ItemCart = ({ product }) => {
  const { removeItem } = UseCartContext();
  return (
    <div className="container backgroung-img">
      <div className="col">
        <div className="row">
          <div className="item-cart mt-5">
            <tr className="items-buy">
              <th>
                <img src={product.image} alt={product.title} />
              </th>
              <th className="p-widht">
                <p>{product.title}</p>
              </th>
              <th>
                <p className="p-widht">Cantidad: {product.quantity}</p>
              </th>
              <th>
                <p className="p-widht">$ {product.price}</p>
              </th>
              <th>
                <p className="p-widht">Subtotal ${product.quantity * product.price}</p>
              </th>
              <th>
                <Button
                  onClick={() => {
                    
                    Swal.fire({
                      position: "top-end",
                      title: "Producto Eliminado",
                      showConfirmButton: false,
                      timer: 1000,
                    });

                    removeItem(product.id);
                  }}
                  variant="danger"
                  className="button-remove"
                >
                  Eliminar
                </Button>
              </th>
            </tr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
