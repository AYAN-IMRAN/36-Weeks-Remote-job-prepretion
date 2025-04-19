/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
      throw new Error('Invalid index');
    }
    this.todos.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (index < 0 || index >= this.todos.length) {
      throw new Error('Invalid index');
    }
    this.todos[index] = updatedTodo;
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
      return null; // Return null if the index is invalid
    }
    return this.todos[indexOfTodo];
  }

  clear() {
    this.todos = [];
  }
}



const todoList = new Todo()

todoList.add("Buy groceries");
todoList.add("Complete homework");
todoList.add("Clean the house");



console.log(todoList.get(1));

todoList.update(1, "Complete homework and study")
console.log(todoList.get(1));
todoList.remove(0)
todoList.clear()
console.log(todoList.getAll()) 

module.exports = Todo;
