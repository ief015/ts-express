import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, ts-express');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
