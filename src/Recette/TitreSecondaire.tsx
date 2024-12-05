import React from 'react';

export interface TitreProps {
  titre: string;
}

export function TitreSecondaire(props: TitreProps) {
  return <h2>{props.titre}</h2>
}