import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// face comments
function emitComments(id) {
    setInterval(() => {
        // eslint-disable-next-line no-template-curly-in-string
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {
                detail: `nội dung của lesson ${id}`,
            })
        );
    }, 3000);
}

emitComments(1);
emitComments(2);
emitComments(3);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
