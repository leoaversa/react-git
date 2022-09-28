import React from 'react'
import './Button.css'
import Swal from 'sweetalert2'
import { Button } from 'react-bootstrap'





const ButtonForm = () => {
  
  
    
    return(
      
    
    <Button onClick={() => {
      Swal.fire({

        position: "top-end",
        title: "Gracias por tu compra",
        showConfirmButton: false,
        timer: 1000,});
      }}
        type="submit" variant="primary" className="button-compra">
            Terminar compra
          </Button>   
          
  )
}

export default ButtonForm

