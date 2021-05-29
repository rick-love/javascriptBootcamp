const addNote = document.getElementById('addNote');
const searchText = document.getElementById('search-text');
const notesDiv = document.getElementById('div__notes');

const notes = getSavedNotes();

const filters = {
  searchText: '',
};

renderNotes(notes, filters);

///////////////////////////////////
////////////////////EVENT LISTENERS
searchText.addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

addNote.addEventListener('click', (e) => {
  notes.push({
    id: uuidv4(),
    title: '',
    body: '',
  });
  saveNotes(notes);
  renderNotes(notes, filters);
});

document.querySelector('#filterBy').addEventListener('change', (e) => {
  console.log(e.target.value);
});

