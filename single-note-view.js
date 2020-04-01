(function(exports) {

  function SingleNoteView(note) {
    this.note = note
  }

  SingleNoteView.prototype.getSingleNoteHTML = function() {
    console.log(this.note.text);
    return (`<div>${this.note.text}</div>`);
  }

  exports.SingleNoteView = SingleNoteView

})(this);
