import React, { useState, useReducer } from 'react';
import 'antd/dist/antd.css';
import { Radio, Button, Input } from 'antd';

function BrekeleReducer(state, action) {
    const { type } = action;
    console.log(type);

    switch (type) {
        case 1:
            return {
                isA: true,
                isB: false,
                isC: false,
                btnSantuyFlag: false,
            };
        case 2:
            return {
                isA: false,
                isB: true,
                isC: false,
                btnSantuyFlag: false,
            };
        case 3:
            return {
                isA: false,
                isB: false,
                isC: true,
                btnSantuyFlag: false,
            };
        default:
            break;
    }
}

function Brekele() {
    const [state, dispatch] = useReducer(BrekeleReducer, {
        isA: false,
        isB: false,
        isC: false,
        btnSantuyFlag: true,
    });

    function onChange(e) {
        dispatch({ type: e.target.value });
    }

    return (
        <div>
            <Radio.Group onChange={onChange}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
            </Radio.Group>
            <br />
            <br />
            {state.isA && <Input placeholder="A" />}
            {state.isB && <Input placeholder="B" />}
            {state.isC && <Input placeholder="C" />}
            <br />
            <br />
            <Button type="primary" disabled={state.btnSantuyFlag}>
                Primary
            </Button>
        </div>
    );
}

export default Brekele;
