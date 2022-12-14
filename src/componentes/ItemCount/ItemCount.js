import "./ItemCount.css";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


function ItemCount({ initial, stock, onAdd }) {
  const [contador, setContador] = useState(parseInt(initial));

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  useEffect(() => {
    setContador(parseInt(initial));
  }, [initial]);

  return (
    <div className="contador">
      <Button disabled={contador <= 1} onClick={decrementar} variant="dark">
        -
      </Button>{" "}
      <span>{contador}</span>
      <Button disabled={contador >= stock} onClick={incrementar} variant="dark">
        +
      </Button>{" "}
      <div>
        <>
          <Button
            disabled={stock <= 0}

            onClick={() => {
                    
              Swal.fire({
                position: "top-end",
                title: "Producto Agregado",
                showConfirmButton: false,
                timer: 1000,
              });

            onAdd(contador)}}
            variant="dark"
            
          >
            Agregar al carrito
          </Button>{" "}
        </>
      </div>
    </div>
  );
}

export default ItemCount;
