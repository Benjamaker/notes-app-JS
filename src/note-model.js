(function(exports) {

  function Note(string, noteID){
    this.text = string
    this.noteID = noteID
  }

Note.prototype.getText = function() {
  return this.text
};

exports.Note = Note;

})(this);
