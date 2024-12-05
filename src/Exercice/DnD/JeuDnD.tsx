import React, { ReactElement, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ChangerStats,Stats } from './ChangerStats';
import { ChoisirRace} from './ChoisirRace';

function genererStatistiques(race:string): Stats {
  const statistiques: Stats = {
    force: Math.floor(Math.random() * 7) + 6,
    intelligence: Math.floor(Math.random() * 7) + 6,
    dexterite: Math.floor(Math.random() * 7) + 6,
    charisme: Math.floor(Math.random() * 7) + 6,
    endurance: Math.floor(Math.random() * 7) + 6,
  }
    switch (race) {
      case 'nain':
        statistiques.force += 3;
        statistiques.intelligence -= 2;
        statistiques.endurance += 2;
        statistiques.charisme -= 3;
        break;
      case 'elfe':
        statistiques.force -= 2;
        statistiques.intelligence += 3;
        statistiques.dexterite += 3;
        statistiques.endurance -= 2;
        break;
      default:
        break;
    }
  
    return statistiques;

  }
  export function JeuDnD() {
    const [race, setRace] = useState<string | null>(null);
    const [caracteristique, setCaracteristique] = useState<Stats | null>(null);
    const [pointsDisponibles, setPointsRestants] = useState<number>(5);
  
    const determinerRace = (choisirRace: string) => {
    setRace(choisirRace);
    const stats= genererStatistiques(choisirRace);
    setCaracteristique(stats);
    setPointsRestants(5);
    }
  
    const incrementerCaracteristique = (caracteristiques:keyof Stats) =>{
     
      if (pointsDisponibles > 0 && caracteristique && caracteristique[caracteristiques] < 18) {
        const nouvellesCaracteristiques = { ...caracteristique };
        nouvellesCaracteristiques[caracteristiques]++;
        setCaracteristique(nouvellesCaracteristiques);
        setPointsRestants(pointsDisponibles - 1);
      }
    };
    let composantAffiche;
    if (race === null) {
      composantAffiche = <ChoisirRace choisirRace={determinerRace}/>;
    }
    else  {
      composantAffiche = <ChangerStats statistiques={caracteristique!} incrementer={(incrementerCaracteristique)} points={pointsDisponibles}/>;
    }
    return (
      <>
        <Container>
          <Row>
            <Col>
              {composantAffiche}
            </Col>
          </Row>
        </Container>
      </>
    );
  }