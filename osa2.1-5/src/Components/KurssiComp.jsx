import React from 'react';
import Otsikko from './Otsikko.jsx';
import Sisalto from './Sisalto.jsx';
import Yhteensa from './Yhteensa.jsx';

const KurssiComp = ({kurssi}) => {

    return (
        <div>
            <Otsikko kurssi={kurssi}/>
            <Sisalto kurssi={kurssi}>
            </Sisalto>
            <Yhteensa kurssi={kurssi}/>
        </div>
    )
}

export default KurssiComp