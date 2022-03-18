import React, { useState } from 'react';
import UseEffect from './UseEffect';


function Mout() {
    const [isPending, setIsPending] = useState(false);

    return <div>
        <h1>Mout</h1>
        <button onClick={() => setIsPending(!isPending)}>Mout</button>
        {isPending && <UseEffect />}
    </div>;
}

export default Mout;
