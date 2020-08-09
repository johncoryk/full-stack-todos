const todosRouter = require('express').Router();
const todosController = require('../controllers/todos-controller');

todosRouter.get('/', todosController.index);
todosRouter.post('/', todosController.create);

todosRouter.get('/add', (req, res) => {
  res.render('todos/add');
});

todosRouter.get('/:id', todosController.show);
todosRouter.put('/:id', todosController.update);
todosRouter.delete('/:id', todosController.delete);

module.exports = todosRouter;
