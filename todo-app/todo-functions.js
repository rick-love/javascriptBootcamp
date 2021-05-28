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

  divTodos.innerHTML = '';
  todoSummary.innerHTML = '';
  todoSummary.appendChild(generateSummaryDOM(incompletedTodos));

  filteredTodos.forEach((todo) => {
    const todoEl = generateTodoDOM(todo);
    divTodos.appendChild(todoEl);
  });
};

// GENERATE TODOS TO DOM
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('div');
  const textEl = document.createElement('span');
  const checkbox = document.createElement('input');
  const deleteBtn = document.createElement('button');

  //   Add Checkbox
  checkbox.type = 'checkbox';
  todoEl.appendChild(checkbox);

  //   Add Text
  if (todo.text.length > 0) {
    textEl.textContent = todo.text;
  } else {
    textEl.textContent = 'Unnamed Todo';
  }
  todoEl.appendChild(textEl);

  //   Add Delete Button
  deleteBtn.textContent = 'x';
  todoEl.appendChild(deleteBtn);
  return todoEl;
};

// GENERATE SUMMARY TO DOM
const generateSummaryDOM = (incompletedTodos) => {
  const summary = document.createElement('h3');
  summary.textContent = `There are ${incompletedTodos.length} todo's left.`;
  return summary;
};
