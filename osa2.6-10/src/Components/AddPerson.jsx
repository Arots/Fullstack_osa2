import React from 'react'

const AddPerson = ({handleNumberChange, handleNameChange, nameValue, numberValue, onSubmit}) => {
    return (
        <div>
            <h2>Lisää uusi</h2>
            <form onSubmit={onSubmit}>
                <div>
                    nimi: <input type="text" onChange={handleNameChange}
                        value={nameValue}
                        placeholder="Uusi nimi" />
                </div>
                <div>
                    numero: <input type="text" onChange={handleNumberChange}
                        value={numberValue}
                        placeholder="anna numero" />
                </div>
                <div>
                    <br />
                    <button type="submit">Lisää</button>
                </div>
            </form>
        </div>
    )
}

export default AddPerson;