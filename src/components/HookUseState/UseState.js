import React, { useState } from 'react';
import { StyleUseState } from '../style/UseState.styled';

const listCar = ['BMW', 'Audi', 'Mercedes', 'Toyota'];

const listFruit = ['Apple', 'Banana', 'Orange', 'Watermelon'];

function UseState() {
    const [count, setCount] = useState(0);
    const [car, setCar] = useState(listCar[0]);
    const [fruit, setFruit] = useState(listFruit[0]);

    const handleClick = () => {
        setCount(count + 1);
    };

    const handRamdom = () => {
        const random = Math.floor(Math.random() * listFruit.length);
        setFruit(listFruit[random]);
    };
    return (
        <StyleUseState>
            <div className="ex-1">
                <h1>{count}</h1>
                <button onClick={handleClick}>Click</button>
            </div>
            <div className="ex-2">
                <h1>{car}</h1>
                <select onChange={(e) => setCar(e.target.value)}>
                    {listCar.map((item, index) => <option key={index} value={item}>{item}</option>)}
                </select>
            </div>
            <div className="ex-3">
                <h1>{fruit}</h1>
                <button onClick={handRamdom}>Ramdom</button>
            </div>
        </StyleUseState>
    );
}

export default UseState;
