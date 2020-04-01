(function(exports) {

  function Note(string, assignID){
    this.text = string
    this.noteID = -1
  }

Note.prototype.getText = function() {
  return this.text
};

Note.prototype.assignID = function() {
  this.noteID += 1
}

exports.Note = Note;
exports.Note.assignID = Note.assignID

})(this);
