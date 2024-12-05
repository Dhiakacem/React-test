import React, { useState } from "react";
import { Container, Table, InputGroup, Form, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import SortSwitchButton from "./SortSwitchButton";

export interface PieceMusicale {
  titre: string;
  artiste: string;
  categorie: string;
}

export interface AfficherListeMusiqueProps {
  pieces: PieceMusicale[];
}

export function AfficherListeMusique({ pieces }: AfficherListeMusiqueProps) {
  const [chercherMusique, setChercherMusique] = useState("");
  const [ordreTri, setOrdreTri] = useState<"asc" | "desc">("asc");
  const [critereTri, setCritereTri] = useState<
    "titre" | "artiste" | "categorie"
  >("titre");
  const [piecesFiltrees, setPiecesFiltrees] = useState<PieceMusicale[]>(pieces);
  const [messageTri, setMessageTri] = useState<string>("");

  const normalizeText = (text: string) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const filtrerPiecesMusicales = (text: string) => {
    const textAChercher = normalizeText(text);
    return pieces.filter(
      (piece) =>
        normalizeText(piece.titre).includes(textAChercher) ||
        normalizeText(piece.artiste).includes(textAChercher) ||
        normalizeText(piece.categorie).includes(textAChercher)
    );
  };

  const comparer = (a: PieceMusicale, b: PieceMusicale): number => {
    const ordre = ordreTri === "asc" ? 1 : -1;
    return a[critereTri].localeCompare(b[critereTri], "fr") * ordre;
  };

  const trierPieces = () => {
    const piecesTriees = [...piecesFiltrees].sort(comparer);
    setPiecesFiltrees(piecesTriees);
    setMessageTri(
      `Affichage trié ${
        ordreTri === "asc" ? "ascendant" : "descendant"
      } par ${critereTri}`
    );
  };

  const handleRechercheChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const valeur = event.target.value;
    setChercherMusique(valeur);
    setPiecesFiltrees(filtrerPiecesMusicales(valeur));
  };

  // Reset function added ''bech l state yebda dima up to date ou l 9dime en generale yetfasakh''

  const handleChangerCritere = (
    nouveauCritere: "titre" | "artiste" | "categorie"
  ) => {
    setCritereTri(nouveauCritere);
    setOrdreTri("asc");
    trierPieces();
  };

  const handleChangerOrdre = () => {
    const nouveauOrdre = ordreTri === "asc" ? "desc" : "asc";
    setOrdreTri(nouveauOrdre);
    trierPieces();
  };

  return (
    <Container>
      <h1>Liste des musiques</h1>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Recherche par titre, artiste ou catégorie..."
          value={chercherMusique}
          onChange={handleRechercheChange}
        />
        <Button variant="outline-secondary">
          <FaSearch />
        </Button>
      </InputGroup>

      <div className="d-flex justify-content-between mb-3">
        <Form.Select
          aria-label="Sélectionner critère de tri"
          onChange={(e) =>
            handleChangerCritere(
              e.target.value as "titre" | "artiste" | "categorie"
            )
          }
        >
          <option value="titre">Titre</option>
          <option value="artiste">Artiste</option>
          <option value="categorie">Catégorie</option>
        </Form.Select>

        {/* l button of switch used here bech l state yamel reloadde a chaque changement*/}
        <SortSwitchButton
          ordreTri={ordreTri}
          handleChangerOrdre={handleChangerOrdre}
        />
      </div>

      {/*  tri message juste pour l'amelioration */}
      <div className="mb-3">
        <strong>{messageTri}</strong>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Artiste</th>
            <th>Catégorie</th>
          </tr>
        </thead>
        <tbody>
          {piecesFiltrees.map((piece, index) => (
            <tr key={index}>
              <td>{piece.titre}</td>
              <td>{piece.artiste}</td>
              <td>{piece.categorie}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
