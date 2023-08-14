import express from 'express'
const service = express();
const port = process.env.PORT?? 5000;

//routes
import getCheck from './routes/getCheck.route.js';

//use(s)
service.use('/get-check', getCheck);

service.listen(port, () => {
  console.log(`listening on port ${port}`);
})