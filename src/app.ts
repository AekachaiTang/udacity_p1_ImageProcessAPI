import express from 'express';
import path from 'path';
import routes from './routes/index';
import logger from './utils/logger';

const app = express();
const port = 3000;

app.use('/', logger, routes);

app.listen(port, () => {
  console.log(`server started on Port : ${port}`);
});

export default app;
