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
            return null;
        }
        return this.todos[indexOfTodo];
    }

    clear() {
        this.todos = [];
    }
}

const todoList = new Todo();

// Select DOM elements
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoListContainer = document.getElementById('todo-list');
const clearTodosBtn = document.getElementById('clear-todos-btn');

// Function to render the todo list
function renderTodos() {
    todoListContainer.innerHTML = ''; // Clear the current list
    const todos = todoList.getAll();
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.classList.add('todo-text');
        span.textContent = todo;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => {
            todoList.remove(index);
            renderTodos(); // Re-render the todo list
        };

        // Create the update button
        const updateBtn = document.createElement('button');
        updateBtn.classList.add('update-btn');
        updateBtn.textContent = 'Update';
        updateBtn.onclick = () => {
            const updatedTodo = prompt('Update your todo:', todo);
            if (updatedTodo && updatedTodo.trim() !== '') {
                todoList.update(index, updatedTodo.trim());
                renderTodos(); // Re-render the todo list
            }
        };

        li.appendChild(span);
        li.appendChild(updateBtn);
        li.appendChild(removeBtn);
        todoListContainer.appendChild(li);
    });
}

// Event listener for the 'Add' button
addTodoBtn.addEventListener('click', () => {
    const newTodo = todoInput.value.trim();
    if (newTodo !== '') {
        todoList.add(newTodo);
        todoInput.value = ''; // Clear input
        renderTodos(); // Re-render the todo list
    }
});

// Event listener for the 'Clear All' button
clearTodosBtn.addEventListener('click', () => {
    todoList.clear();
    renderTodos(); // Re-render the todo list
});

// Initial render of the todo list
renderTodos();
