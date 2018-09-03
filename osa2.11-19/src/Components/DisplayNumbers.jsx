import React from 'react';
import Confirm from 'react-confirm-bootstrap';


const DisplayNumbers = ({list, eventHandler}) => {
    return (
        <div>
            <h2>Numerot</h2>
            <ul>
                {list.map(persons => <li className="note" key={persons.id}>
                {persons.name} {persons.number}
                <Confirm
                        onConfirm={eventHandler(persons.id)}
                        body={`Poistetaanko henkilö ${persons.name}?`}
                        confirmText="Poista"
                        cancelText="Peruuta"
                        title="Poistovalikko 
                        (myö ei savossa mithään hiton ikkunoita tai akkunoita käythetä!)">
                        <button id="removeButton">
                        Halluutko sie poistaa thän numeron?</button>
                </Confirm>
                </li>)}
            </ul>
        </div>
    )
}

export default DisplayNumbers;