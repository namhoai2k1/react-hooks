import React, { useEffect, useState } from 'react';

function UseEffect() {
    const [data, setData] = useState([]);
    const [choiceData, setChoiceData] = useState('users');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${choiceData}`)
            .then(response => response.json())
            .then(json => setData(json));
    }, [choiceData]);
    return (
        <div>
            <h1>UseEffect</h1>
            <nav>
                <button onClick={() => setChoiceData('users')}>Users</button>
                <button onClick={() => setChoiceData('posts')}>Posts</button>
            </nav>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name || item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default UseEffect;
