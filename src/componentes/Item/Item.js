import './Item.css';
import Card from 'react-bootstrap/Card';

const Item = ({info}) => {
    return (
        
            <Card style={{ width: '18rem' }} className="Card">
        <a href='guitar' className="guitar">
            <img src={info.image} alt="" />
            <h2>{info.title}</h2>
            <p>${info.precio}</p>
        </a>
        </Card>
        
    );
}



export default Item;