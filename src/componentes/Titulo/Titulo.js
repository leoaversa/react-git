import './Titulo.css'
function Titulo(props) {
    console.log(props)
    return(
        <h2>Hola {props.persona}</h2>
    )
}

export default Titulo;