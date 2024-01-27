import React from 'react'

const Practise2 = ({ helloWorld }) => {
    return (
        <div>
            <h1>Child Component!!!!</h1>
            <input type='text' onChange={(e) => helloWorld(e.target.value)} />
        </div>
    )
}

export default Practise2