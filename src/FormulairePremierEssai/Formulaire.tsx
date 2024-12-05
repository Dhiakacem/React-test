import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';



export function Formulaire2() {
    const [courriel, setCourriel] = useState<string>('');
    const [acceptIno, setAccepteInfo] = useState<boolean>(false);
    const [genre, setGenre] = useState<string>("femme");
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
                                    name='nom'
                                    required
                                    autoFocus
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
                                    name='prennom'
                                    required
                                    autoFocus
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
                                        value="oui"
                                        label="En couchant cette case à coucher, j'accepte de recevoir des informations etdes offre prmotionnelles de la part de "
                                        checked={acceptIno}
                                        onChange={e => setAccepteInfo(!acceptIno)}
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
                                            name={"femme"}
                                            value={"femme"}
                                            label={"Femme"}
                                            checked={genre === "femme"}
                                            onChange={(e) => setGenre(e.target.value)}
                                        />
                                        <Form.Check
                                            type="radio"
                                            name="homme"
                                            value="homme"
                                            label="Homme"
                                            checked={genre === "homme"}
                                            onChange={(e) => setGenre(e.target.value)}
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
                                                placeholder="dateNaissance"
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
                                    value={courriel}
                                    onChange={e => setCourriel(e.target.value)}
                                    required
                                    autoFocus
                                />
                            </Col>
                            <Form.Text className='text-muted'>
                                L'email est obligatoire!
                            </Form.Text>
                        </Form.Group>

                    </Form>
                    <Form className='border p-3'>
                        <Form.Group className="mb-3" controlId="formProvince">
                            <Form.Label>Province :</Form.Label>
                            <Form.Select
                                aria-label='Sélectionner votre province'
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