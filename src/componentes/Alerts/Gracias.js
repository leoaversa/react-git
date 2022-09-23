
import Swal from "sweetalert2";

const Gracias = () => {
    return(
        
        Swal.fire( {
            title: "¡Gracias por tu compra!",
            
            html: 'Volver al' + '<a href="./"> inicio</a>',
          })

)                   
}  

export default Gracias



