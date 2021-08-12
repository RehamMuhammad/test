const fs = require("fs");

/****************************************************************************************************/
//Add Notes

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateTitles = notes.filter((note) => {
    return note.title === title;
  });
  console.log(duplicateTitles);
  if (duplicateTitles.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("Saved Successfully");
  } else {
    console.log("Error Duplicate Title");
  }
};

/****************************************************************************************************/
//Remove Notes
const removeNotes = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });
  console.log(notesToKeep);
  saveNotes(notesToKeep);
};

/****************************************************************************************************/
//list Notes
const listNotes = () => {
  const notes = loadNotes();
  notes != null
    ? notes.forEach((note) => {
        console.log(note.title);
        console.log(note.body);
      })
    : console.log("You don't have any nodes to show right now");
};

/****************************************************************************************************/
//Read Notes
const readNotes = (title) => {
  const notes = loadNotes();
  const noteToFind = notes.find((note) => {
    return note.title === title;
  });
  if (noteToFind) {
    console.log(noteToFind.title);
    console.log(noteToFind.body);
  } else {
    console.log("Sorry we can't find note with this title");
  }
};

/****************************************************************************************************/
//common functions

const loadNotes = () => {
  try {
    const notesJson = fs.readFileSync("notes.json").toString();
    return JSON.parse(notesJson);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const newNotes = JSON.stringify(notes);
  fs.writeFileSync("notes.json", newNotes);
};

module.exports = { addNotes, removeNotes, listNotes, readNotes };
