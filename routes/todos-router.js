const todosRouter = require('express').Router();
const todosController = require('../controllers/todos-controller');

todosRouter.get('/', todosController.index);
todosRouter.post('/', todosController.create);

todosRouter.get('/:id', todosController.show);

module.exports = todosRouter;
