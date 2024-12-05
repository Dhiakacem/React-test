import React from 'react';
import { TitreSecondaire } from './TitreSecondaire';
import { Instruction } from './Instruction';

export interface InstructionProps {

  instructions: string[]
}

export function Instructions(props: InstructionProps) {
  return (<div>
    <TitreSecondaire titre="Instructions" />
    <ol>
      {props.instructions.map((instruction =>
        <Instruction nom={instruction} key={instruction} />
      ))}
    </ol>
  </div>)
}