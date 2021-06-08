const addNote = document.getElementById('addNote');
const searchText = document.getElementById('search-text');
const notesDiv = document.getElementById('div__notes');
const timestamp = moment().valueOf();

let notes = getSavedNotes();

const filters = {
  searchText: '',
  sortBy: 'byEdited',
};

renderNotes(notes, filters);

///////////////////////////////////
////////////////////EVENT LISTENERS
searchText.addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

addNote.addEventListener('click', (e) => {
  const id = uuidv4();
  notes.push({
    id: id,
    title: '',
    body: '',
    createdAt: timestamp,
    updatedAt: timestamp,
  });
  saveNotes(notes);

  location.assign(`/edit.html#${id}`);
});

document.querySelector('#filter-by').addEventListener('change', (e) => {
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

const now = moment();
const bday50 = moment([2021, 10, 17]);
console.log('Birthday: ' + bday50.format('MMM Do yyyy'));
console.log(now.to(bday50));
console.log(now.diff(bday50, 'days'));
