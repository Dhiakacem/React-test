import React from 'react';
import { Alert } from 'react-bootstrap';
import { ValideHorloge } from './ValideHorloge'
import { AffichageHeure12 } from './AffichageHeure12';
export interface HorlogeProps {
    heures: number,
    minutes: number
}
export function Horloge(props: HorlogeProps) {
    let valider: boolean = ValideHorloge({ heures: props.heures, minutes: props.minutes })
    if (!valider) {
        return (
            <Alert variant='danger'>
                Les heures doivent être entre 0 et 23  et les minutes entre 0 et 59.
            </Alert>
        );
    }
    return (
        <AffichageHeure12 heures={props.heures} minutes={props.minutes} />
    )
}