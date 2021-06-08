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
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// Generate NOTES IN DOM
const generateNoteDOM = (note) => {
  const noteEl = document.createElement('div');
  noteEl.className = 'note-element';
  const textEl = document.createElement('a');
  textEl.className = 'note-text';
  const removeButton = document.createElement('button');

  //   REMOVE NOTE BUTTON
  removeButton.textContent = 'x';
  removeButton.className = 'remove-note';
  noteEl.appendChild(removeButton);
  removeButton.addEventListener('click', () => {
    removeNote(note.id);

    saveNotes(notes);
    renderNotes(notes, filters);
  });

  //   NOTE TITLE TEXT
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = 'Unnamed Note';
  }

  textEl.setAttribute('href', `/edit.html#${note.id}`);
  noteEl.appendChild(textEl);
  return noteEl;
};

// SAVE NOTES
const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

// Sort Notes by Dropdown Value
const sortNotes = (notes, sortBy) => {
  if (sortBy === 'byEdited') {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'byCreated') {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'alphabetical') {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};

// RENDER NOTES
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  notesDiv.innerHTML = '';

  filteredNotes.forEach((note) => {
    const noteEl = generateNoteDOM(note);
    notesDiv.appendChild(noteEl);
  });
};

const updateEditMessage = (timestamp) =>
  `Last edited ${moment(timestamp).fromNow()}`;
