import React, { useState } from 'react';
import { StyleUseEffect } from '../style/UseEffect.styled';
import AvatarPerveiw from './AvatarPerveiw';
import ChatApp from './ChatApp';
import TimeFunction from './TimeFunction';
import UseEffect from './UseEffect';

const components = ['UseEffect', 'TimeFunction', 'AvatarPerveiw', 'ChatApp'];

function Mout() {
    const [type, setType] = useState('UseEffect');
    return (
        <StyleUseEffect>
            <div className="box-button">
                {components.map((item, index) => (
                    <button key={index} onClick={() => setType(item)}>
                        {item}
                    </button>
                ))}
            </div>
            {type === 'UseEffect' && <UseEffect />}
            {type === 'TimeFunction' && <TimeFunction />}
            {type === 'AvatarPerveiw' && <AvatarPerveiw />}
            {type === 'ChatApp' && <ChatApp />}
        </StyleUseEffect>
    );
}

export default Mout;
