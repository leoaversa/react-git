import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function CarouselGuitar() {
  return (
    <Carousel className='margin-carousel'>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="../car5.jpg"
          alt="first slide"
        />
        <Carousel.Caption className='titulo-carousel'>
          <h3>TU PRIMER GUITARRA</h3>
          <p>Eres un guitarrista desde el primer momento</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="../car3.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className='titulo-carousel2'>
          <h3>CREA TU PROPIO ESTILO</h3>
          <p>Diseña tu instrumento de acuerdo a tus necesidades</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../car4.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className='titulo-carousel3'>
          <h3>EL MEJOR SONIDO PARA TU BANDA</h3>
          <p>
            Experimenta con los nuevos efectos para tu guitarra
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselGuitar;