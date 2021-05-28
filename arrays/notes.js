const notes = [
  { title: 'This is the first Note', body: 'Body of Note 1' },
  { title: 'Second Note 2', body: 'Body of Note 2' },
  { title: 'A third Note', body: 'Body of Note 3' },
];

const sortnotes = (notes) => {
  notes.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const findNotes = function (notes, query) {
  return notes.filter((note, index) => {
    const isTitleMatch = note.title
      .toLocaleLowerCase()
      .includes(query.toLowerCase());
    const isBodyMatch = note.body
      .toLocaleLowerCase()
      .includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

sortnotes(notes);
console.log(notes);

// console.log(findNotes(notes, '2'));

// const note = findNote(notes, 'note 2');
// console.log(note);
