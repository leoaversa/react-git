import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './FormValidation.css'
import Gracias from '../Alerts/Gracias';
import { Link } from 'react-router-dom';


function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    
    
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="container mt-5 mb-5">
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingresa tu nombre"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingresa tu apellido"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Usuario</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Usuario"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor elige un nombre de usuario.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" placeholder="Ciudad" required />
          <Form.Control.Feedback type="invalid">
            Por favor elige una Ciudad.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Provincia</Form.Label>
          <Form.Control type="text" placeholder="Provincia" required />
          <Form.Control.Feedback type="invalid">
          Por favor elige una Provincia.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>CP</Form.Label>
          <Form.Control type="text" placeholder="Código Postal" required />
          <Form.Control.Feedback type="invalid"  className="mb-3">
          Por favor elige un código postal.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-5">
        <Form.Check
          required
          label="Acepto los términos y condiciones"
          feedback="Debes aceptar los términos para realizar tu compra"
          feedbackType="invalido"
        />
      </Form.Group>
      <Link to= '/'>
      <Button onClick={Gracias} type="submit">Finalizar compra</Button>
      </Link>
    </Form>
    
  );
}



export default FormExample