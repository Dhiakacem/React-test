
import { Etudiant } from './Etudiant'
import { Table } from 'react-bootstrap'
export interface TableauEtudiantProps {
    etudiants: Etudiant[];
}
export function TableauEtudiant(props: TableauEtudiantProps) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Matricule</th>
                </tr>
            </thead>

            <tbody>
                {props.etudiants.map((etudiant) => (
                    <tr key={etudiant.matricule}>
                        <td>{etudiant.nom}</td>
                        <td>{etudiant.matricule}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}