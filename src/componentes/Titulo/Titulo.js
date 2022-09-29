import "./Titulo.css";
import "animate.css";
function Titulo(props) {
  return (
    <h2 className="title-guitars animate__animated animate__zoomIn">
      {props.categoria} BY CATEGORY
    </h2>
  );
}

export default Titulo;