import React from 'react';

export interface StatistiquesProps {
    mainDes: number[];
}
export function Statistiques(props: StatistiquesProps) {
    const { mainDes } = props;
    //calculerle total des dés
    const total = mainDes.reduce((acc, valeur) => acc + valeur, 0)
    const Statistiques = [1, 2, 3, 4, 5, 6].map((numero) => ({
        numero,
        count: mainDes.filter((valeur) => valeur === numero).length,
    }))
    return (
        <>
            <h3>Total de la main :{total}</h3>
            <h3>Stats</h3>
            <ul>
                {Statistiques.map((stat) => (
                    <li key={stat.numero}>
                        Nombre de  {stat.numero} : {stat.count}
                    </li>
                ))}
            </ul>
        </>
    );
}