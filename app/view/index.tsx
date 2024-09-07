import React from 'react';
import { createRoot } from 'react-dom/client';

const div: HTMLDivElement = document.createElement('div');
document.querySelector('body')?.append(div);

const root = createRoot(div);

const paragraph = React.createElement('p', null, 'Hello React');

root.render(paragraph);
