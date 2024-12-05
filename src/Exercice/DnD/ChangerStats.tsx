import React from 'react';
import Button from 'react-bootstrap/Button';

export interface Stats {
  [Key: string]: number;
}
export interface ChangerStatsProps {
  statistiques: Stats;
  incrementer: (caracteristique: string) => void;
  points: number;
}
export function ChangerStats(props: ChangerStatsProps) {
  const { statistiques, incrementer, points } = props;
  return (
    <>
      <h1>Valider le profil</h1>
      <h3>Points à assigner: {points}</h3>
      <ul>
        {Object.keys(statistiques).map((caracteristique) => (
          <li key={caracteristique}>
            {caracteristique}:{statistiques[caracteristique]}/18
            <Button variant='warning' size='sm' className='m-1' onClick={() => incrementer(caracteristique)}>Incrementer</Button>

          </li>
        ))}
      </ul>
    </>
  );
}