import React from 'react';

const DisplayNumbers = ({list}) => {
    return (
        <div>
            <h2>Numerot</h2>
            <ul>
                {list.map(persons => <li key={persons.id}>{persons.name} {persons.numero}</li>)}
            </ul>
        </div>
    )
}

export default DisplayNumbers;