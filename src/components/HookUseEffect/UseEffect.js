import React, { useEffect, useState } from 'react';

function UseEffect() {
    const [data, setData] = useState([]);
    const [choiceData, setChoiceData] = useState('users');
    const [width, setWidth] = useState(window.innerWidth);
    const [goToTop, setGoToTop] = useState(false);
    const nameData = ['todos', 'users', 'posts', 'comments'];
    // use effect with dependency array
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${choiceData}`)
            .then((response) => response.json())
            .then((json) => setData(json));
    }, [choiceData]);
    // use effrt list domevent
    useEffect(() => {
        const handleScroll = () => {
            setGoToTop(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div>
            <p className="width-window">Width: {width}</p>
            <h1>UseEffect - {choiceData}</h1>
            <nav className="nav-menu">
                {nameData.map((item, index) => (
                    <button key={index} onClick={() => setChoiceData(item)}>
                        {item}
                    </button>
                ))}
            </nav>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name || item.title}</li>
                ))}
            </ul>
            {goToTop && (
                <button
                    className="btn-gototop"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    Go to top
                </button>
            )}
        </div>
    );
}

export default UseEffect;
