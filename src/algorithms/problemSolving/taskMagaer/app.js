class TodoManager {
  /**
   * @param {Object[]} todos
   * @param {string} todos[].title
   * @param {boolean} todos[].is_completed
   */
  constructor(todos) {
    this.todos = todos;
  }

  getCompleted() {
    const xs = this.todos.find(todo => todo.is_completed);
    return [xs];
  }

  getPending() {
    const xs = this.todos.find(todo => !todo.is_completed);
    return [xs];
  }

  getFirst() {
    return this.todos[0];
  }

  getLast() {
    return this.todos[this.todos.length - 1];
  }

  getCount() {
    return this.todos.length;
  }

  markAsCompleted(title) {
    const xs = this.todos;
    return xs.map(x =>
      x.title === title ? { ...x, is_completed: (x.is_completed = true) } : x
    );
  }

  /**
   *
   * @param {Object[]} todo
   */
  add(todo) {
    const { title, is_completed } = todo;
    if (title && is_completed) {
      this.todos.push(todo);
      return this.todos;
    }
    if ((title && is_completed === null) || is_completed === undefined) {
      todo.is_completed = false;
      this.todos.push(todo);
      return this.todos;
    }
  }

  allCompleted() {
    return this.todos.every(x => x.is_completed);
  }

  allPending() {
    return this.todos.every(x => !x.is_completed);
  }

  exportCsv() {
    const xs = this.todos;
    return xs.map(x => `${x.title}`).join(', ');
  }
}

// sample usage
try {
  const initialTodos = [
    {
      title: 'Learn JavaScript',
      is_completed: true,
    },
    {
      title: 'Practice flashcards',
      is_completed: false,
    },
  ];
  const todoManager = new TodoManager(initialTodos);

  // console.log(todoManager.getCompleted()); // returns completed todos
  // console.log(todoManager.getPending()); // returns todos that are not completed
  // console.log(todoManager.getFirst());
  // console.log(todoManager.getLast());
  // console.log(todoManager.getCount());
  // todoManager.markAsCompleted('Practice flashcards'); // receives a title, finds todo with that title and marks it as completed
  todoManager.add({
    title: 'Recap flashcards',
    is_completed: true,
  });
  // when is_completed is not defined, it should default to false
  console.log(
    todoManager.add({
      title: 'Get some rest',
    })
  );
  // console.log(todoManager.allCompleted()); // returns true when all todo items are completed
  // console.log(todoManager.allPending()); // returns true when all todo items are pending
  // console.log(todoManager.exportCsv()); // returns Comma Separated Values of titles "Todo title, Another todo title"
  // console.log(todoManager);
} catch (error) {
  // we wrapped the sample usage with try/catch
  // to avoid it from breaking when you have not implemented
  // all the methods yet.
}
