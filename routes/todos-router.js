const todosRouter = require('express').Router();
const todosController = require('../controllers/todos-controller');

todosRouter.get('/', todosController.index);

module.exports = todosRouter;
