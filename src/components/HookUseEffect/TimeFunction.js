import React, { useEffect, useState } from 'react';

function TimeFunction() {
    const [countdown, setCountdown] = useState(180);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(countdown - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [countdown]);
    return <div className="count-down">{countdown}</div>;
}

export default TimeFunction;
