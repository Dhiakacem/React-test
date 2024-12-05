import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PieceMusicale } from '../TP1/pieces';
import { AficherListeMusique } from '../TP1/AfficherListeMusique';

export interface FiltrageProps {
    pieces: PieceMusicale[];
}

export function Filtrage({ pieces }: FiltrageProps) {
    const [searchText, setSearchText] = useState('');
    const [filteredPieces, setFilteredPieces] = useState(pieces);

    // Fonction pour normaliser les textes (diacritiques et majuscules)
    function normalizeText(text: string) {
        if (typeof text !== 'string') return '';
        return text
            .normalize('NFD') // Décompose les lettres accentuées en base+diacritique
            .replace(/[\u0300-\u036f]/g, '') // Supprime les diacritiques
            .toLowerCase(); // Transforme en minuscule
    }

    // Fonction pour filtrer les pièces en fonction du texte
    const filterPieces = (text: string) => {
        const normalizedSearchText = normalizeText(text);
        return pieces.filter(
            (piece) =>
                normalizeText(piece.titre).includes(normalizedSearchText) ||
                normalizeText(piece.artiste).includes(normalizedSearchText) ||
                normalizeText(piece.categorie).includes(normalizedSearchText)
        );
    };

    // Gestion du changement dans l'input
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchText(value);
        setFilteredPieces(filterPieces(value));
    };

    return (
         <Container>
            <Row>
                <Col>
                    <h1>Liste des pièces musicales :</h1>
                </Col>
                <Col className="d-flex justify-content-end">
                    <input
                        type="text"
                        placeholder="Rechercher par titre, artiste ou catégorie..."
                        value={searchText}
                        onChange={handleSearchChange}
                        style={{ marginBottom: '10px', padding: '5px', width: '300px' }}
                    />
                </Col>
            </Row>
           <AficherListeMusique pieces={filteredPieces} />
        </Container> 
       
    );
}
