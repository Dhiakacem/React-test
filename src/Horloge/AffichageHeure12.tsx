import React from "react";
export interface AffichageHeure12Props {
    heures: number,
    minutes: number;
}
export function AffichageHeure12(props: AffichageHeure12Props) {
    let heures12: number = props.heures % 12;
    let suffix: string = 'AM';
    if (props.heures >= 12) {
        suffix = 'PM';
    }
    if (heures12 === 0 && props.heures >= 12) {
        heures12 = 12;
    }
    return (
        <div>
            {heures12}:{props.minutes.toString().padStart(2, '0')} {suffix}
        </div>
    );
}