const todosRouter = require('express').Router();
const todosController = require('../controllers/todos-controller');

todosRouter.get('/', todosController.index);
todosRouter.post('/', todosController.create);

todosRouter.get('/add', (req, res) => {
  res.render('todos/add');
});

todosRouter.get('/:id', todosController.show, (req, res) => {
  res.render('todos/todo', {
    todo: res.locals.todo,
  });
});
todosRouter.put('/:id', todosController.update);
todosRouter.delete('/:id', todosController.delete);

todosRouter.get('/:id/edit', todosController.show, (req, res) => {
  res.render('todos/edit', {
    todo: res.locals.todo,
  });
});

module.exports = todosRouter;
