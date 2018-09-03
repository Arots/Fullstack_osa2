import React from 'react';
import Osa from './Osa';

const Sisalto = ({kurssi}) => {
    return (
        <ul>
            {kurssi.osat.map(osa => <Osa key={osa.id} 
            nimi={osa.nimi} tehtavat={osa.tehtavia}/> )}
        </ul>
    )
}

export default Sisalto