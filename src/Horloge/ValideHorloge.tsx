
export interface ValideHorlogeProps {
    heures: number,
    minutes: number,
}
export function ValideHorloge(props: ValideHorlogeProps):boolean {

    if (props.heures < 0 || props.heures > 23 || props.minutes < 0 || props.minutes > 59) {
       
        return (
            false
        );
    }
    return true;
}