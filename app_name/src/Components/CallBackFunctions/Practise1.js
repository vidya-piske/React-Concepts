import React, { useState } from 'react'
import Practise2 from './Practise2'

const Practise1 = () => {
    const [selectedData, setSelectedData] = useState('')
    const helloWorld = (data) => {
        setSelectedData(data)
    }
    return (
        <div>
            <h1>Parent Component!!!! {selectedData}</h1>
            <Practise2 helloWorld={helloWorld} />
        </div>
    )
}

export default Practise1