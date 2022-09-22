import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css'

function Producto() {
  return (
    <Card style={{ width: '18rem' }} className="card container">
      <Card.Img variant="top" src="./fender1.jpg" />
      <Card.Body>
        <Card.Title>titulo</Card.Title>
        <Card.Text>
          Relic modelo SRV
        </Card.Text>
        <Button variant="primary">Agregar</Button>
      </Card.Body>
    </Card>
  );
}

export default Producto;