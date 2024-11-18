import React, { useState } from 'react';

function Hooksvd() {
    const [counter, setCounter] = useState(15);

    const addValue = () => {
        // Use setCounter to update Counter state
        setCounter(counter + 1);
    }

    return (
        <div>
            <button onClick={addValue}>Add Value</button>
            <h1>{counter}</h1>
            <h2>this is  {counter}</h2>
        </div>
    );
}

export default Hooksvd;
