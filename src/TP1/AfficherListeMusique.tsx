import React from 'react';
import { Table } from 'react-bootstrap'
import { PieceMusicale} from './pieces';

export interface AficherListeMusiqueProps {
    pieces: PieceMusicale[];
}
export function AficherListeMusique({ pieces }: AficherListeMusiqueProps) {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Artiste</th>
                        <th>Categorie</th>
                    </tr>
                </thead>
                <tbody>
                    {pieces.map((piece:PieceMusicale,index:number) => (
                        <tr key={index}>
                            <td>{piece.titre}</td>
                            <td>{piece.artiste}</td>
                            <td>{piece.categorie}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>

    )

}