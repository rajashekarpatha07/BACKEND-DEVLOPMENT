const fs = require("fs");



const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicatenotes = notes.filter(function(note){
        return note.title === title;
    });
    
    if(duplicatenotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log("Note added:", notes);
    } else {
        console.log("Note already exists!");
    }
};

const saveNotes = function (notes) {
    const jsondata = JSON.stringify(notes);
    fs.writeFileSync("notes.json", jsondata);
};

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const datajson = dataBuffer.toString();
        return JSON.parse(datajson);
    } catch (e) {
        return [];
    }
};

// List all notes
const listNotes = function () {
    const notes = loadNotes();
    console.log("Your Notes:");
    notes.forEach(note => {
        console.log(`Title: ${note.title}, Body: ${note.body}`);
    });
};

// Remove a note
const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note) {
        return note.title !== title;
    });
    
    if (notes.length === notesToKeep.length) {
        console.log("No note found with that title.");
    } else {
        saveNotes(notesToKeep);
        console.log(`Note with title "${title}" removed.`);
    }
};

// Read a note by title
const readNote = function (title) {
    const notes = loadNotes();
    const note = notes.find(function(note) {
        return note.title === title;
    });

    if (note) {
        console.log(`Title: ${note.title}\nBody: ${note.body}`);
    } else {
        console.log("No note found with that title.");
    }
};

module.exports = {
 
  addNote,
  listNotes,
  removeNote,
  readNote, // export readNote function
};
