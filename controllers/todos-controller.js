const Todo = require('../models/Todo');

const todosController = {
  index(req, res) {
    Todo.getAll()
      .then(todos => {
        res.json({
          message: 'ok',
          todos,
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err, message: err.message });
      });
  },

  show(req, res) {
    Todo.getById(req.params.id)
      .then(todo => {
        res.json({
          message: 'ok',
          todo,
        });
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
};

module.exports = todosController;
