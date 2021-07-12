import express from "express";
import main from './main';

const routes = express.Router();

routes.get('/', ((req, res) => {
    res.render('index',
      {
          title: 'Main Page App',
          welcomeMsg: 'Image Processing API'
      })
}));

routes.use('/main', main);

export default routes;