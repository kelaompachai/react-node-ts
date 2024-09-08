import path from 'path';

import express from 'express';

const app = express();
const PORT: number = 3000;
const HTML: string = path.join(__dirname, '..', '..', 'view', 'dist', 'index.html');
const JAVASCRIPT: string = path.join(__dirname, '..', '..', 'view', 'dist', 'bundle.js');

app.get('/', (req, res): void => {
  res.sendFile(HTML);
});

app.get('/bundle.js', (req, res): void => {
  res.sendFile(JAVASCRIPT);
});

app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT)
});