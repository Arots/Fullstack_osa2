import React from 'react'

const DisplayMessage = ({message}) => {
    if (message === null) {
        return null
    }
    return (
        <div className="errorMessage">
            {message}
            <br/>
        </div>
    )
}

export default DisplayMessage