const db = require('../db/config');

class Todo {
  constructor({ id, title, category, description, isComplete }) {
    this.id = id || null;
    this.title = title;
    this.category = category;
    this.description = description;
    this.isComplete = false;
  }

  static getAll() {
    return db
      .manyOrNone(
        `
      SELECT * FROM todos;
    `
      )
      .then(todos => {
        return todos.map(todo => {
          return new this(todo);
        });
      });
  }

  static getById(id) {
    return db
      .oneOrNone(
        `
      SELECT * FROM todos
      WHERE id = $1;
    `,
        id
      )
      .then(todo => {
        if (todo) return new this(todo);
        throw new Error('Todo not found!');
      });
  }
}

module.exports = Todo;
