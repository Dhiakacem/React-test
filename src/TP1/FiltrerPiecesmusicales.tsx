import React from 'react';
import { useState } from 'react';
import { Button, Container, InputGroup, } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FaSearch } from "react-icons/fa";


import { AficherListeMusique } from './AfficherListeMusique';
import { TrierListeMusiques } from './TrierListemusiques';
import { PieceMusicale } from './pieces';

export interface FiltrerPiecesmusicalesProps {
    pieces: PieceMusicale[];
}
export function FiltrerPiecesmusicales({ pieces }: FiltrerPiecesmusicalesProps) {

    const [chercherMusique, setCherchermusique] = useState('');
    const [filtrerPieces, setFiltrerPieces] = useState<PieceMusicale[]>(pieces);
    //const[pieceTrie,setPiecesTriees] = useState< PieceMusicale[]>(pieces);

    function normalizeText(text: string) {
        return text
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
    }
    const filtrerPiecesMusicales = (text: string) => {

        const textAChercher = normalizeText(text);
        return pieces.filter(piece =>
            normalizeText(piece.titre).includes(textAChercher) ||
            normalizeText(piece.artiste).includes(textAChercher) ||
            normalizeText(piece.categorie).includes(textAChercher)
        )
    }

    const rechercheChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const valeur = event.target.value;
        setCherchermusique(valeur);
        setFiltrerPieces(filtrerPiecesMusicales(valeur));
    }
    const handeltrie = (piecesTriees: PieceMusicale[]) => {
        setFiltrerPieces(piecesTriees);
    }

    return (
        <Container >
            <Row>
                <Col>
                    <h1>Liste des musiques</h1>
                </Col>
                    <Col  className="d-flex justify-content-end">
                        <InputGroup className='mb-3' style={{ width: "300px" }}>
                            <Form.Control
                                type="text"
                           
                                placeholder='Recherche par titre,artiste ou catégorie..'
                                value={chercherMusique}
                                autoFocus
                                onChange={rechercheChange}
                            />
                               <FaSearch />
                        </InputGroup>                        
         
                    </Col>
                <Col>
                    <TrierListeMusiques pieces={filtrerPieces} onTrier={handeltrie} />
                </Col>
            </Row>
            <AficherListeMusique pieces={filtrerPieces} />
        </Container>
    );
}