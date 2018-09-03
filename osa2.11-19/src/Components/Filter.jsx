
import React from 'react';

const Filter = ({value, onChange}) => {
    return (
        <div>
        Rajaa näytettäviä: <input type="text" onChange={onChange}
                            placeholder="Suodata" value={value}/>
      </div>
    )
}


export default Filter;