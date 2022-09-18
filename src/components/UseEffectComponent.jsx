import React, { useEffect, useState } from 'react';

function UseEffectComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    const addClick = () => {
        setCount((prevState) => prevState + 1);
    };

    const tick = () => {
        setDate(new Date());
    };

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="cmp-use-effect">
            <h1>{date.toLocaleTimeString()}</h1>
            <button type="button" onClick={addClick}>
                Click Here...
            </button>
        </div>
    );
}

export default UseEffectComponent;
