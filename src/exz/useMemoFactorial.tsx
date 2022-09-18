import React, {useState} from 'react';

const UseMemoFactorial = () => {
    const [a, setA] = useState(1)
    const [b, setB] = useState(1)
    let resultA = 1
    let resultB = 1
    for (let i = 1; i <= a; i++) {
        resultA = resultA * i
    }
    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for A: {resultA}
            </div>
            <div>
                Result for B: {resultB}
            </div>
        </div>

    );
};

export default UseMemoFactorial;