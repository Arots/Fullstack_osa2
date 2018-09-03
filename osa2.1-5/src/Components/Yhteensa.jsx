import React from 'react';

const Yhteensa = ({kurssi}) => {
    const tehtavat = kurssi.osat.reduce((summa, osat) =>
         summa + osat.tehtavia
    , 0)

    return (
        <div>
            Yhteensa  {tehtavat} tehtävää
        </div>
    )
}

export default Yhteensa

