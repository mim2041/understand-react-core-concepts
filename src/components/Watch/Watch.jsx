import React, { useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        setSteps(steps + 1);
    }
    return (
        <div>
            <h2>This is my smart watch</h2>
            <p>Steps: {steps}</p>
            <button onClick={increaseSteps}>De Dour.......</button>
        </div>
    );
};

export default Watch;