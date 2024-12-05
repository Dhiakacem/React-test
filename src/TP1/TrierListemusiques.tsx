import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { PieceMusicale } from './pieces';

export interface TrierListeMusiquesProps {
    pieces: PieceMusicale[];
    onTrier: (piecesTriee: PieceMusicale[]) => void;
}

export function TrierListeMusiques({ pieces, onTrier }: TrierListeMusiquesProps) {

    /* const [filtrerPieces, setFiltrerPieces] = useState(pieces);*/
  //const[trierPieces , setTrierListe] = useState(pieces);
    const [ordreTri, setOrdreTri] = useState<'asc' | 'desc'>('asc');
    const [critereTrie, setCritereTrie] = useState<'titre' | 'artiste' | 'categorie'>('titre');

    const comparer = (a: PieceMusicale, b: PieceMusicale): number => {

        const ordre = ordreTri === 'asc' ? 1 : -1;
        const comparaisonPrincipale = a[critereTrie].localeCompare(b[critereTrie], 'fr');
        if (comparaisonPrincipale !== 0) {
            return comparaisonPrincipale * ordre;
        }
        if (critereTrie !== 'titre') {
            const comparaisonTitre = a.titre.localeCompare(b.titre, 'fr');

            if (comparaisonTitre !== 0) {
                return comparaisonTitre * ordre;
            }
        }
        if (critereTrie !== 'artiste') {
            const comparaisonArtiste = a.artiste.localeCompare(b.artiste, 'fr');

            if (comparaisonArtiste !== 0) {
                return comparaisonArtiste * ordre;
            }
        }

        return 0;
    };
    const trierListe = () => {
        const piecesTriees = [...pieces].sort(comparer);
        onTrier(piecesTriees);

    }
    const changerCritere = (nouveauCritere: 'titre' | 'artiste' | 'categorie') => {
        setCritereTrie(nouveauCritere);
        trierListe();
    }
    const changerOrdre = () => {
        setOrdreTri(ordreTri === 'asc' ? 'desc' : 'asc');
        trierListe();
    }
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-end">
                    <Form.Select
                        aria-label='Sélectionner votre critere de trie'
                        onChange={(e) => changerCritere(e.target.value as 'titre' | 'artiste' | 'categorie')}
                        className='me-2 w-100'

                    >
                        <option value="titre">Titre</option>
                        <option value="artiste">Artiste</option>
                        <option value="categorie">Categorie</option>
                    </Form.Select>
                    <Button variant='success' onClick={changerOrdre} className='me-2 w-100'>
                        {ordreTri === 'asc' ? 'Trie ascendant' : 'Trie descendant'}
                    </Button>
                </Col>
            </Row>

        </Container>
    )
}