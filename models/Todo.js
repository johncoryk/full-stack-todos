const db = require('../db/config');

class Todo {
  constructor({ id, title, category, description }) {
    this.id = id || null;
    this.title = title;
    this.category = category;
    this.description = description;
    this.is_complete = false;
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

  save() {
    return db
      .one(
        `
      INSERT INTO todos
      (title, category, description, is_complete)
      VALUES ($/title/, $/category/, $/description/, $/is_complete/)
      RETURNING *
    `,
        this
      )
      .then(todo => {
        return Object.assign(this, todo);
      });
  }
}

module.exports = Todo;
