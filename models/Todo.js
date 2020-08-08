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
}

module.exports = Todo;
