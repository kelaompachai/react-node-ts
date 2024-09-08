import React from 'react';
import { createRoot } from 'react-dom/client';

import Component from './component';

console.log('got here');

const div: HTMLDivElement = document.createElement('div');
document.querySelector('body')!.append(div);

const root = createRoot(div);

root.render(<Component />);
