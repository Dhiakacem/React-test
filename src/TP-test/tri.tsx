import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export interface TrierListeMusiquesProps {
    onTrier: (critere: 'titre' | 'artiste' | 'categorie', ordre: 'asc' | 'desc') => void;
}

export function TrierListeMusiques({ onTrier }: TrierListeMusiquesProps) {
    const [critereTrie, setCritereTrie] = React.useState<'titre' | 'artiste' | 'categorie'>('titre');
    const [ordreTri, setOrdreTri] = React.useState<'asc' | 'desc'>('asc');

    const handleCritereChange = (nouveauCritere: 'titre' | 'artiste' | 'categorie') => {
        setCritereTrie(nouveauCritere);
        onTrier(nouveauCritere, ordreTri);
    };

    const handleOrdreChange = () => {
        const nouveauOrdre = ordreTri === 'asc' ? 'desc' : 'asc';
        setOrdreTri(nouveauOrdre);
        onTrier(critereTrie, nouveauOrdre);
    };

    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-end">
                    <Form.Select
                        aria-label="Sélectionner le critère de tri"
                        onChange={(e) => handleCritereChange(e.target.value as 'titre' | 'artiste' | 'categorie')}
                        className="me-2 w-100"
                    >
                        <option value="titre">Titre</option>
                        <option value="artiste">Artiste</option>
                        <option value="categorie">Catégorie</option>
                    </Form.Select>
                    <Button variant="success" onClick={handleOrdreChange} className="me-2 w-100">
                        {ordreTri === 'asc' ? 'Tri ascendant' : 'Tri descendant'}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
