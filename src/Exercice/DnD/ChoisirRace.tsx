import React from "react";
import Table from 'react-bootstrap/Table';

export interface ChoisirRaceProps {
  choisirRace: (race: string) => void;
}
export function ChoisirRace({ choisirRace }: ChoisirRaceProps) {
  const race = ["nain", "humain", "elfe"];
  const choisirActionRace = (race: string) => choisirRace(race)
  return (
    <>
      <h1>Choisir votre race</h1>
      <p>Cliquez sur l'image</p>
      <Table bordered size="sm" >
        <thead>
          <tr>
            <td align="center">Nain</td>
            <td align="center">Humain</td>
            <td align="center">Elfe</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {race.map((race) => (
              <td align="center" key={race} onClick={() => choisirActionRace(race)}>
                <img src={`${race}.jpg`} height="200" alt={race}/>   
                </td>
            ))}
          </tr>
        </tbody>
      </Table >
    </>
  );
}