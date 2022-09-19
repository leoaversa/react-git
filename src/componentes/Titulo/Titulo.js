import './Titulo.css'
function Titulo(props) {
    console.log(props)
    return(
        <h2 className='title-guitars'> {props.persona} Shop</h2>
    )
}

export default Titulo;