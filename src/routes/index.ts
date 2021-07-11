import express from "express";
import main from './main';

const routes = express.Router();

routes.get('/', ((req, res) => {
    res.send('Main Api Routes');
}));

routes.use('/main', main);

export default routes;