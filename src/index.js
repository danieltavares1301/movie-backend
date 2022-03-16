import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
//import cors from 'cors';
//import helmet from 'helmet';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(morgan('dev'));

app.get('/', (resquest, response) => {
  response.json({ message: 'Hello World' });
});

app.listen(PORT, () => {
  console.log(`Server running PORT: ${PORT}`);
});
