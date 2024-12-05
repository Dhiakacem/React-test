import React from 'react';
import { TitrePrincipal } from './TitrePrincipal';

export interface EnteteProps {
  titre: string,
  description: string
}
export function Entete(props: EnteteProps) {
  return (
    <div>
      <TitrePrincipal titre={props.titre} />
      <p>{props.description}</p>
    </div>
  )
}