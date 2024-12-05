import React from 'react';

export interface MainDesProps {
    mainDes: number[];
    handleClick: (index: number) => void;
}

export function MainDes(props: MainDesProps) {
    const { mainDes, handleClick } = props;
    const images = ['de1.png',
        'de2.png',
        'de3.png',
        'de4.png',
        'de5.png',
        'de6.png'];
    return (
        <>
            {mainDes.map((valeur, index) => (
                <img key={index}
                    src={`${images[valeur - 1]}`}
                    alt={`Dé ${valeur}`}
                    width={104} className='p-1'
                    onClick={() => handleClick(index)} />
            ))}
        </>
    );

}
