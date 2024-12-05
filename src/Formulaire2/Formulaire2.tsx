import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DonnesFormulaire } from './Formulaire1';

export interface Formulaire2Props {
    donnees: DonnesFormulaire
    miseAjoursDonnees: (nouveauxDonnees: Partial<DonnesFormulaire>) => void;
}
export function Formulaire2(props: Formulaire2Props) {
    const { donnees, miseAjoursDonnees } = props;
    return (
        <Container>
            <Row>
                <Col>

                    <Form className='border p-3'>
                        <Form.Group className="mb-3" controlId="formProvince">
                            <Form.Label>Province :</Form.Label>
                            <Form.Select
                                aria-label='Sélectionner votre province'
                                value={donnees.province}
                                onChange={(e) =>miseAjoursDonnees({province:e.target.value}) }
                                required

                            >
                                <option value="">Sélectionner votre province</option>
                                <option value="QC">Québec</option>
                                <option value="ON">Ontario</option>
                                <option value="AB">Alberta</option>
                                <option value="MB">Manitoba</option>
                                <option value="NB">Nouveau-Brunswik</option>

                            </Form.Select>
                            <Form.Text className='text-muted'>
                                La province est obligatoire!
                            </Form.Text>

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAdresse">

                            <Form.Label>Adresse : </Form.Label>
                            <Col xl={6}>
                                <Form.Control
                                    type="text"
                                    placeholder="Entrez votre adresse"
                                    name='adresse'
                                    value={donnees.adresse}
                                    onChange={(e) =>miseAjoursDonnees({adresse:e.target.value}) }
                                    required
                                    autoFocus
                                />
                            </Col>
                            <Form.Text className='text-muted'>
                                L'adresse est obligatoire!
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formVille">

                            <Form.Label>Ville : </Form.Label>
                            <Col xl={6}>
                                <Form.Control
                                    type="text"
                                    placeholder="Entrez votre ville"
                                    name='ville'
                                    value={donnees.ville}
                                    onChange={(e) =>miseAjoursDonnees({ville:e.target.value}) }
                                    required
                                    autoFocus
                                />
                            </Col>
                            <Form.Text className='text-muted'>
                                La ville est obligatoire!
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAdresse">

                            <Form.Label>Code Postale : </Form.Label>
                            <Col xl={6}>
                                <Form.Control
                                    type="text"
                                    placeholder="Entrez le code postale"
                                    name='codePostale'
                                    value={donnees.codepostale}
                                    onChange={(e) =>miseAjoursDonnees({codepostale:e.target.value}) }
                                    required
                                    autoFocus
                                />
                            </Col>
                            <Form.Text className='text-muted'>
                                Le code postale est obligatoire!
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAdresse">

                            <Form.Label>Téléphone : </Form.Label>
                            <Col xl={6}>
                                <Form.Control
                                    type="text"
                                    placeholder="Entrez votre numéro de téléphone"
                                    name='téléphone'
                                    value={donnees.telephone}
                                    onChange={(e) =>miseAjoursDonnees({telephone:e.target.value}) }
                                    required
                                    autoFocus
                                />
                            </Col>
                            <Form.Text className='text-muted'>
                                Le numéro de téléphone est obligatoire!
                            </Form.Text>
                        </Form.Group>


                    </Form>
                </Col>
            </Row>
        </Container>
    );
}