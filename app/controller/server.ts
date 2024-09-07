import express from 'express';


const app = express();
const PORT: number = 3000;

app.use('/', (req, res): void => {
  res.json({what: 'cheese'});
});

app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT)
});