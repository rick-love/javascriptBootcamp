const noteTitle = document.getElementById('note-title');
const noteBody = document.getElementById('note-body');
const dateElement = document.getElementById('lastEdit');
const removeNoteButton = document.getElementById('note-remove');
const saveNoteButton = document.getElementById('note-save');
const noteId = location.hash.substr(1);

let notes = getSavedNotes();
let note = notes.find(function (note) {
  return note.id === noteId;
});

if (note === undefined) {
  location.assign('/index.html');
} else {
  noteTitle.value = note.title;
  noteBody.value = note.body;
  dateElement.textContent = updateEditMessage(note.updatedAt);
}

noteTitle.addEventListener('input', (e) => {
  note.title = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = updateEditMessage(note.updatedAt);
  saveNotes(notes);
});
noteBody.addEventListener('input', (e) => {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = updateEditMessage(note.updatedAt);
  saveNotes(notes);
});

removeNoteButton.addEventListener('click', () => {
  removeNote(note.id);
  saveNotes(notes);

  location.assign('/index.html');
});
saveNoteButton.addEventListener('click', () => {
  saveNotes(notes);
  location.assign('/index.html');
});

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    note = notes.find(function (note) {
      return note.id === noteId;
    });

    if (note === undefined) {
      location.assign('/index.html');
    } else {
      noteTitle.value = note.title;
      noteBody.value = note.body;
      dateElement.textContent = updateEditMessage(note.updatedAt);
    }
  }
});
