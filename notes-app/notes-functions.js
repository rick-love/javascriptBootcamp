

// Read local data
const getSavedNotes = () => {
  let notesJSON = localStorage.getItem('notes');

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

// Remove Note from List
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => {
    return note.id === id;
  });
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// Generate NOTES IN DOM
const generateNoteDOM = (note) => {
  const noteEl = document.createElement('div');
  const textEl = document.createElement('span');
  const removeButton = document.createElement('button');

  //   REMOVE NOTE BUTTON
  removeButton.textContent = 'x';
  noteEl.appendChild(removeButton);
  removeButton.addEventListener('click', () => {
    removeNote(note.id);

    saveNotes(notes)
    renderNotes(notes, filters);
  });

  //   NOTE TITLE TEXT
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = 'Unnamed Note';
  }
  noteEl.appendChild(textEl);
  return noteEl;
};

// SAVE NOTES
const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

// RENDER NOTES
const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  notesDiv.innerHTML = '';

  filteredNotes.forEach((note) => {
    const noteEl = generateNoteDOM(note);
    notesDiv.appendChild(noteEl);
  });
};
