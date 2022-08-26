import './Contador.css'
import Button from 'react-bootstrap/Button';

function Contador () {
    return(
        <div className="contador">
            <Button variant="primary">-</Button>{' '}
            <span>2</span>
            <Button variant="primary">+</Button>{' '}            
            <div>
            <>
      <Button variant="primary">Agregar al carrito</Button>{' '}
      
    </>
            </div>
        </div>
    );
}

export default Contador;