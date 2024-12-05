
import { Button } from 'react-bootstrap';

export interface BouttonsProps {
    onIncrement: () => void;
    onDecrement: () => void;
    onReset: () => void;
}
export function Bouttons({ onIncrement, onDecrement, onReset }: BouttonsProps) {
    return (
        <div>
            <Button variant="primary" onClick={onIncrement}>
                Incrémenter
            </Button>
            <Button variant="success" onClick={onDecrement}>
                Décrémenter
            </Button>
            <Button variant="warning" onClick={onReset}>
                Remise à zéro
            </Button>
        </div>
    );
}