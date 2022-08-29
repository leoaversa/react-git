import './ItemCount.css'
import Button from 'react-bootstrap/Button';
import {useEffect ,useState} from 'react';

function ItemCount ({initial, stock, onAdd}) {
    const[contador, setContador] = useState(parseInt(initial));

    const incrementar = () =>{
        
        setContador (contador + 1)
    
}
    
    const decrementar = () =>{
        
        setContador (contador - 1)
    
}

    useEffect(( ) =>{
        setContador(parseInt(initial));
}, [initial])


    return(
        <div className="contador">
            <Button disabled={contador <= 1} onClick={decrementar}variant="primary">-</Button>{' '}
            <span>{contador}</span>
            <Button disabled={contador >= stock} onClick={incrementar} variant="primary">+</Button>{' '}            
            <div>
            <>
      <Button disabled={stock <= 0} onClick={() => onAdd(contador)} variant="primary">Agregar al carrito</Button>{' '}
      
    </>
            </div>
        </div>
    );
}

export default ItemCount; 