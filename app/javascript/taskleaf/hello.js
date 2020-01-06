import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentloded', () => {
    ReactDOM.render(
        React.createElement('div', null, 'Hello World!'),
        document.body.appendChild(document.createElement('div')),
    );
});
