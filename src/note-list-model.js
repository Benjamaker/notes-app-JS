(function(exports) {

  function NoteList() {
    this.notes = [];
    this.noteID = 0
  }

NoteList.prototype.createNote = function(text) {
  var note = new Note(text, this.noteID);
  this.notes.push(note);
  this.noteID++;
};

NoteList.prototype.displayNotes = function() {
  return this.notes;
};

exports.NoteList = NoteList;
// exports.NoteList.createNote = NoteList.createNote;
// exports.NoteList.displayNotes = NoteList.displayNotes;

})(this);
