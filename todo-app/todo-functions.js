// FETCH SAVED TODOS
const getTodos = () => {
  // Check for saved local data
  let todosJSON = localStorage.getItem('todos');

  if (todosJSON !== null) {
    console.log(todosJSON);
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

// ADD TODOS
const addTodo = (text) => {
  todos.push({
    id: uuidv4(),
    text: text,
    completed: false,
  });
  saveTodos(todos);
  renderTodos(todos, filters);
};

// SAVE TODOS
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// REMOVE TODO
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => {
    return todo.id === id;
  });
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// RENDER TODOS
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const incompletedTodos = filteredTodos.filter((todo) => {
    return !todo.completed;
  });

  todoList.innerHTML = '';
  todoSummary.innerHTML = '';
  todoSummary.appendChild(generateSummaryDOM(incompletedTodos));

  filteredTodos.forEach((todo) => {
    const todoEl = generateTodoDOM(todo);
    todoList.appendChild(todoEl);
  });
};

const toggleTodo = (id) => {
  const todo = todos.find((todo) => {
    return todo.id === id;
  });
  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
};

// GENERATE TODOS TO DOM
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('div');
  const checkboxLabel = document.createElement('label');
  const checkbox = document.createElement('input');
  const deleteBtn = document.createElement('button');

  todoEl.className = 'todo__item';
  
  //   Add Checkbox
  checkbox.type = 'checkbox';
  checkbox.className = 'todo__item-checkbox';
  checkbox.checked = todo.completed;
  todoEl.appendChild(checkbox);
  
  //   Add Label + Text
  checkboxLabel.className = 'todo__item-label';
  if (todo.text.length > 0) {
    checkboxLabel.textContent = todo.text;
  } else {
    checkboxLabel.textContent = 'Unnamed Todo';
  }
  todoEl.appendChild(checkboxLabel);


  checkbox.addEventListener('change', () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  //   Add Delete Button
  deleteBtn.textContent = 'x';
  deleteBtn.className = 'todo__item-btn';
  deleteBtn.addEventListener('click', () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  todoEl.appendChild(deleteBtn);

  return todoEl;
};

// GENERATE SUMMARY TO DOM
const generateSummaryDOM = (incompletedTodos) => {
  const summary = document.createElement('h3');
  
  summary.textContent = `${incompletedTodos.length} remaining items todo.`;
  return summary;
};
