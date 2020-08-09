const Todo = require('../models/Todo');

const todosController = {
  index(req, res) {
    Todo.getAll()
      .then(todos => {
        res.render('todos/index', {
          message: 'ok',
          todos,
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err, message: err.message });
      });
  },

  show(req, res, next) {
    Todo.getById(req.params.id)
      .then(todo => {
        res.locals.todo = todo;
        next();
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err, message: err.message });
      });
  },

  create(req, res) {
    new Todo({
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      is_complete: req.body.is_complete,
    })
      .save()
      .then(() => {
        res.redirect('/todos');
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err, message: err.message });
      });
  },

  update(req, res) {
    Todo.getById(req.params.id)
      .then(todo => {
        return todo.update(req.body);
      })
      .then(updatedTodo => {
        res.redirect(`/todos/${updatedTodo.id}`);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err, message: err.message });
      });
  },

  delete(req, res) {
    Todo.getById(req.params.id)
      .then(todo => {
        return todo.delete();
      })
      .then(() => {
        res.redirect('/todos');
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err, message: err.message });
      });
  },
};

module.exports = todosController;
