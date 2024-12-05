import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';


export function Ampoule() {
    const [estAllunee, setEstAllumee] = useState(false);
    const toggle =() => {
      setEstAllumee(etatActuelle => !etatActuelle);
    };
    return (
      <Container>
        <Row>
          <Col>
            <h1>Ampoule</h1>
            <img src={estAllunee ? './Images/on.png' : './Images/off.png'} height={439} alt="Ampoules" />
          </Col>
        </Row>
        <Row>
          <Col>
          <Button variant='primary' onClick={toggle}>
                {estAllunee ? 'Mettre l\'ampoul à OFF' : 'Mettre l\'ampoul à ON'}
            </Button>
          </Col>
        </Row>
      </Container>
    );
}