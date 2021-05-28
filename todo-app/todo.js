const searchText = document.getElementById('search-text');
const divTodos = document.getElementById('div__todos');
const todoSummary = document.getElementById('todo-summary');
const todoForm = document.getElementById('todoForm');
const todoText = document.getElementById('todoText');
const submitTodoBtn = document.getElementById('submitTodo-btn');
const hideCompleted = document.getElementById('hideCompleted');

const todos = getTodos();

const filters = {
  searchText: '',
  hideCompleted: false,
};

renderTodos(todos, filters);

///////////////////////
////////EVENT LISTENERS

searchText.addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo(e.target.elements.todo.value);
  e.target.elements.todo.value = '';
});

hideCompleted.addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
