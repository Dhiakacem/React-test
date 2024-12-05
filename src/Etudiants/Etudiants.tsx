import { Container, Row, Col } from 'react-bootstrap'

import { etudiants } from './Etudiant';
import { StatutClasse } from './StatutClasse';
export function Etudiant() {
    return (
        <StatutClasse etudiants={etudiants} />
    );
};