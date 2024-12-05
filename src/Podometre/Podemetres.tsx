import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import React, { useState } from 'react';
import { Bouttons} from './Podometre';

export function Podemetres() {
    const [compteur, setCompteur] = useState(0);
    const Incrementer = () => {
        setCompteur(compteur + 1);
    };
    const Decrementer = () => {
        setCompteur(Math.max(compteur - 1, 0));
    };
    const RemiseAZero = () => {
        setCompteur(0);
    };
    return (
        <Container>
            <Row>
                <Col lg>
                    <h1>{compteur}</h1>
                    
                    <Bouttons
                        onIncrement={Incrementer}
                        onDecrement={Decrementer}
                        onReset={RemiseAZero}
                    />
                </Col>
            </Row>
        </Container>
    );
}