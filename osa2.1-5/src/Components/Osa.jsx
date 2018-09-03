import React from 'react';

const Osa = ({nimi, tehtavat}) => {
    return (
        <li>
            {nimi} {tehtavat}
        </li>
    )
}

export default Osa