import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { MainDes } from './MainDes';
import { Statistiques } from './Statistiques';


export function JeuDeDes() {
    const [mainDes, setMainDes] = useState<number[]>(brasserMainAleatoire());
    function genererNombreAleatoire(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    function brasserMainAleatoire(): number[] {
        return [
            genererNombreAleatoire(1, 6),
            genererNombreAleatoire(1, 6),
            genererNombreAleatoire(1, 6),
            genererNombreAleatoire(1, 6),
            genererNombreAleatoire(1, 6)
        ]
    }
    function handleClick(index: number) {
        const nouvelleMain = [...mainDes]
        nouvelleMain[index] = genererNombreAleatoire(1, 6);
        setMainDes(nouvelleMain);
    }
    return (
        <>
            <h1>Jeu de dé
                <Button
                    variant='warning'
                    className='m-1'
                    onClick={() => setMainDes(brasserMainAleatoire())}>
                    Brasser la main
                </Button>
            </h1>
            <strong> cliquer sur l'image pour brasser un dé individuel</strong><br />
            <MainDes mainDes={mainDes} handleClick={handleClick} />
            <Statistiques mainDes={mainDes} />
        </>
    );

}