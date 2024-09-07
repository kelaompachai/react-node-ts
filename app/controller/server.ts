import path from 'path';

import express from 'express';

const app = express();
const PORT: number = 3000;
const FILE: string = path.join(__dirname, '..', '..', 'view', 'dist', 'index.html');
console.log('FILE:', FILE);

app.use('/', (req, res): void => {
  res.sendFile(FILE);
});

app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT)
});