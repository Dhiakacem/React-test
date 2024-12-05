import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsCheck, BsX } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';

export function AfficherMotDePasse(motDePasse: string) {
    alert(`Le mot de passe est ${motDePasse}`)
}

export function Formulaire() {
    const [motDePasse, setMotDePasse] = useState<string>('');
    const [copieMotDePasse, setCopieMotDePasse] = useState<string>('');
    const aMajuscule = /[A-Z]/.test(motDePasse);
    const aChiffre = /[\d]/.test(motDePasse);
    const estIdentique: boolean = motDePasse === copieMotDePasse;
    const estValide = aMajuscule && aChiffre ;
    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formMotDePasse">
                            <Form.Label>Entrez votre mot de passe :</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Entrez votre mot de passe"
                                value={motDePasse}

                                onChange={e => setMotDePasse(e.target.value)}
                            />
                        </Form.Group>
                        <Alert variant={estValide ? 'success':'warning'}  >
                            <ul>
                                <li>Le mot de passe doit contenir une majuscule {aMajuscule ? <BsCheck className={"text-success"} /> : <BsX className={"text-danger"} />}</li>
                                <li>Le mot de passe doit contenir un chiffre {aChiffre ? <BsCheck className={"text-success"} /> : <BsX className={"text-danger"} />}</li>
                            </ul>
                        </Alert>

                        <Form.Group className="mb-3" controlId="formMotDePasseConfirmation">
                            <Form.Label>Confirmez votre mot de passe :</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Confirmez votre mot de passe"
                                value={copieMotDePasse}
                                onChange={e => setCopieMotDePasse(e.target.value)}
                            />
                        </Form.Group>

                        <Alert  variant={estIdentique ? 'success':'warning'}>
                            <ul>
                                <li>Le mot de passe doit être identique {estIdentique ? <BsCheck className={"text-success"} /> : <BsX className={"text-danger"} />}</li>
                            </ul>
                        </Alert>

                        <Button
                            variant="primary"
                            type="submit"
                            onClick={() => AfficherMotDePasse(motDePasse)}
                            disabled = {!estIdentique || !estValide}
                        >
                            Envoyer
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}