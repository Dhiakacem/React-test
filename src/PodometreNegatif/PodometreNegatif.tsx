import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import React, { useState } from 'react';
import { Boutons } from './Bouton';
export function PodometreNegatif() {
    const [compteur, setCompteur] = useState(0);
    const Incrementer = () => {
        setCompteur(compteur + 1);
    };
    const Decrementer = () => {
        setCompteur(compteur - 1);
    };
    const RemiseAZero = () => {
        setCompteur(0);
    };
    return (
        <Container>
            <Row>
                <Col lg>
                    <h1>{compteur}</h1>
                    <Boutons
                        onIncrement={Incrementer}
                        onDecrement={Decrementer}
                        onReset={RemiseAZero}
                    />
                </Col>
            </Row>
        </Container>
    );
}