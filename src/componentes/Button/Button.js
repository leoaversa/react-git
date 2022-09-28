import React from 'react'
import './Button.css'
import Gracias from '../Alerts/Gracias'
import { Button } from 'react-bootstrap'




const ButtonForm = () => {
  
  
    
    return(
    
    <Button onClick={Gracias} 
  type="submit" variant="primary" className="button-compra">
            Terminar compra
          </Button>   
  )
}

export default ButtonForm