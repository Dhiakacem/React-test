 
 import React, { useState } from 'react';
 import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';
 import 'bootstrap/dist/css/bootstrap.min.css';
 
 import { Horloge } from './Horloge';

 export function Horloges() {
  return (
    <Container>
      <Row>
        <p>L'heure est :</p>
      </Row>
      <Row>
        <Horloge heures={4} minutes={0} />
        <Horloge heures={0} minutes={2} />
        <Horloge heures={14} minutes={27} />
        <Horloge heures={12} minutes={9} />
        <Horloge heures={26} minutes={30} />
      </Row>
    </Container>
  );
}