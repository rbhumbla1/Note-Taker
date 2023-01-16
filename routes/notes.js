const notes = require('express').Router();
const { readAndAppend, readFromFile, readAndDelete } = require('../helpers/fsUtils');
const Note = require('../lib/note');

// GET Route for retrieving notes information
notes.get('/', (req, res) => {
  // Logic for sending all the content of db/db.json
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

// POST Route for a error logging
notes.post('/', (req, res) => {
  // Logic for appending data to the db/db.json file
  if (req.body) {
    //create Note object
    let newNote = new Note(req.body.id, req.body.title, req.body.text);


    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding the note');
  }
});

// POST Route for a error logging
notes.delete('/:id', (req, res) => {
    const noteId = req.params.id;

    // Logic for appending data to the db/db.json file
    if (noteId > 0) {
      readAndDelete(noteId, './db/db.json');
      res.json(`Note deleted successfully 🚀`);
    } else {
      res.error('Error in deleting the note');
    }
  }); 

module.exports = notes;

