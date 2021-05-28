const todos = [
  { text: 'Study German', completed: true },
  { text: 'Go surfing', completed: true },
  { text: 'Learn Google Ads', completed: false },
  { text: 'See Portugal', completed: true },
  { text: 'Book hotel', completed: false },
];

// Create function to remove a todo by text value
const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};

const getThingsToDo = function (todos, index) {
  return todos.filter((todo, index) => {
    return !todo.completed;
  });
};

const sortTodos = (todos) => {
  todos.sort((a, b) => {
    // if (a.completed < b.completed) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);

// console.log(getThingsToDo(todos));
// deleteTodo(todos, '');
// console.log(todos);
