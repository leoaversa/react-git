import './Item.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const Item = ({info}) => {
  

    return (
        
      <Card style={{ width: "18rem" }} className="Card">
        <Link to={`/detalle/${info.id}`} className="guitar">         
          <img src={info.image} alt="" />
          <h2>{info.title}</h2>
          <p>${info.precio}</p>
          <Button variant="primary">Más detalles</Button>
        </Link>
      </Card>
      
    );
}



export default Item;