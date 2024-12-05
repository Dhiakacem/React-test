
import { Container, Row, Col } from 'react-bootstrap'
import { Etudiant } from './Etudiant'
import { TableauEtudiant } from './TableauxEtudiant';


export interface StatutClasseProps {
    etudiants: Etudiant[];
}
export function StatutClasse(props: StatutClasseProps) {
    const etudiantRessuis: Etudiant[] = props.etudiants.filter(etud => etud.note >= 6);
    const etudiantEchoues: Etudiant[] = props.etudiants.filter(etud => etud.note < 6);
    return (
        <Container>
            <Row>
                <Col lg>
                    <h2>Étudiants Réussis</h2>
                    <TableauEtudiant etudiants={etudiantRessuis} />
                </Col>
                <Col lg>
                    <h2>Étudiants en Échec</h2>
                    <TableauEtudiant etudiants={etudiantEchoues} />
                </Col>
            </Row>
        </Container>
    )


}