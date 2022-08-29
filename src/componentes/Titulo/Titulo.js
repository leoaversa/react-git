import './Titulo.css'
function Titulo(props) {
    console.log(props)
    return(
        <h2 className='title-guitars'>Shop {props.persona}</h2>
    )
}

export default Titulo;