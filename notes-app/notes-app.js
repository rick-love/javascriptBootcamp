const addNote = document.getElementById('addNote');
const searchText = document.getElementById('search-text');
const notesDiv = document.getElementById('div__notes');

let notes = getSavedNotes();

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
  const id = uuidv4();
  notes.push({
    id: id,
    title: '',
    body: '',
  });
  saveNotes(notes);
  location.assign(`/edit.html#${id}`);
});

document.querySelector('#filterBy').addEventListener('change', (e) => {
  console.log(e.target.value);
});

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

const now = moment();
console.log(now.toString())




// const date1 = new Date('November 17 1971');
// const date2 = new Date('November 17 2021');
// const timestamp1 = date1.getTime();
// const timestamp2 = date2.getTime();
// console.log(timestamp1);
// console.log(timestamp2);

// if (timestamp1 > timestamp2) {
//   console.log(date2.toString())
// } else {
//   console.log(date1.toString())
// }

// const now = new Date();
// const timestamp = now.getTime();
// const myDate = new Date(timestamp);
// console.log(myDate.getFullYear());

// console.log(now.toString());
// console.log(now.getTime());
// console.log(now.getTimezoneOffset());

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()+1}`)
// console.log(`Day: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)
