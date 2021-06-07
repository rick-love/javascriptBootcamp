const noteTitle = document.getElementById('note-title');
const noteBody = document.getElementById('note-body');
const removeNoteButton = document.getElementById('note-remove');
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
}

noteTitle.addEventListener('input', (e) => {
  note.title = e.target.value;
  saveNotes(notes);
});
noteBody.addEventListener('input', (e) => {
  note.body = e.target.value;
  saveNotes(notes);
});

removeNoteButton.addEventListener('click', () => {
  removeNote(note.id);
  saveNotes(notes);

  location.assign('/index.html');
});

window.addEventListener('storage', (e) => {
  if(e.key === 'notes'){
      notes = JSON.parse(e.newValue)
      note = notes.find(function (note) {
        return note.id === noteId;
      });
      
      if (note === undefined) {
        location.assign('/index.html');
      } else {
        noteTitle.value = note.title;
        noteBody.value = note.body;
      }
  }
});
