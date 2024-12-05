import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export interface DonnesFormulaire{
    nom:string;
    prenom:string;
    courriel:string;
    acceptInfo:boolean;
    genre:string;
    dateNaissance:string;
    province:string;
    adresse:string;
    ville:string;
    codepostale:string;
    telephone:string;
}
export interface Formulaire1Props{
    //les données actuelles du formulaire (passés par le parent)
    donnees:DonnesFormulaire;
    //fonction pour mettre à jours les donnés du formulaire
    miseAJoursDonnees:(nouvelleDonnee: Partial<DonnesFormulaire>) => void;
}
export function Formulaire1(props:Formulaire1Props) {
    const {donnees,miseAJoursDonnees}= props;
    return (
        <Container>
            <Row>
                <Col>
                    <Form className='border p-3'>
                        <h4>1.Parlez-nous de vous</h4>
                        <hr />

                        <Form.Group className="mb-3" controlId="formNom">

                            <Form.Label>Nom : </Form.Label>
                            <Col xl={6}>
                                <Form.Control
                                    type="text"
                                    placeholder="Entrez votre nom"
                                    value={donnees.nom}
                                    name='nom'
                                    required
                                    autoFocus
                                    onChange={(e) => miseAJoursDonnees({nom:e.target.value})}
                                />
                            </Col>
                            <Form.Text className='text-muted'>
                                Le nom est obligatoire!
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPrenom">

                            <Form.Label>Prenom : </Form.Label>
                            <Col xl={6}>
                                <Form.Control
                                    type="text"
                                    placeholder="Entrez votre prenom"
                                    value={donnees.prenom}
                                    name='prenom'
                                    required
                                    autoFocus
                                    onChange={(e) => miseAJoursDonnees({prenom:e.target.value})}
                                />
                            </Col>
                            <Form.Text className='text-muted'>
                                Le prénom est obligatoire!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCheckInfo">
                            <Row>
                                <Col>
                                    <Form.Check
                                        type="checkbox"
                                        name="accept"
                                      
                                        label="En couchant cette case à coucher, j'accepte de recevoir des informations etdes offre prmotionnelles de la part de "
                                        checked={donnees.acceptInfo}
                                        onChange={(e) => miseAJoursDonnees({acceptInfo:e.target.checked})}
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Row>
                            <Form.Group className="mb-3" controlId="formGenre">
                                <Row>
                                    <Col>
                                        <Form.Label>Genre : </Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Check
                                            type={"radio"}
                                            name={"genre"} 
                                            value={"femme"}
                                            label={"Femme"}
                                            checked={donnees.genre === "femme"}
                                            onChange={(e) => miseAJoursDonnees({genre:e.target.value})}
                                        />
                                        <Form.Check
                                            type="radio"
                                            name="genre"
                                            value={"homme"}
                                            label="Homme"
                                            checked={donnees.genre === "homme"}
                                            onChange={(e) => miseAJoursDonnees({genre:e.target.value})}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Row>
                                <Form.Group className="mb-3" controlId="dateAnniversaire">
                                    <Row>
                                        <Col xl={6}>
                                            <Form.Label>Date naissance : </Form.Label>
                                            <Form.Control
                                                type="date"
                                                value={donnees.dateNaissance}
                                                placeholder="dateNaissance"
                                                onChange={(e) => miseAJoursDonnees({dateNaissance:e.target.value})}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Row>

                        </Row>
                        <Form.Group className="mb-3" controlId="formCouriel">

                            <Form.Label>Courriel : </Form.Label>
                            <Col xl={6}>
                                <Form.Control
                                    type="email"
                                    placeholder="Entrez votre adesse courriel"
                                    value={donnees.courriel}
                                    required
                                    autoFocus
                                    onChange={(e) => miseAJoursDonnees({courriel:e.target.value})}
                                />
                            </Col>
                            <Form.Text className='text-muted'>
                                L'email est obligatoire!
                            </Form.Text>
                        </Form.Group>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
}