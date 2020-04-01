(function(exports) {

  function NoteList() {
    this.notes = [];
  }

NoteList.prototype.createNote = function(text) {
  var note = new Note(text);
  this.notes.push(note);
  return note;
};

NoteList.prototype.displayNotes = function() {
  return this.notes;
};

exports.NoteList = NoteList;
exports.NoteList.createNote = NoteList.createNote;
exports.NoteList.displayNotes = NoteList.displayNotes;

})(this);
