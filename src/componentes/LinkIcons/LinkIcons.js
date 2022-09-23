import './LinkIcons.css'
import { Link } from 'react-router-dom'
const LinkIcons = () => {
    return (
      <>
        <div className='contenedor-icons'>
          <div>
            <Link to="./category/eléctrica" className='link-title'>
              <img
                src="../electric.jpg"
                alt="electrica"
                className="icon-electric container"
              />
              <p className="p-electric">Eléctricas</p>
            </Link>
          </div>

          <div>
            <Link to="./category/acústica" className='link-title'>
              <img
                className="icon-electric container"
                src="../acoustic.jpg"
                alt="acustica"
              />
              <p className="p-electric">Acústicas</p>
            </Link>
          </div>
        </div>
      </>
    );
}

export default LinkIcons