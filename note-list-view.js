(function(exports) {

  function NoteListView(notelist) {
    this.notelist = notelist;
  }

NoteListView.prototype.viewNotes = function(){
  mapped = (this.notelist.notes).map(item => item.text.substr(0, 20))
  joined = mapped.join().replace(",", "</div></li><li><div>");
  finalOutput = "<ul><li><div>" + joined + "</div></li></ul>";
  return finalOutput;
};

exports.NoteListView = NoteListView;
exports.NoteListView.viewNotes = NoteListView.viewNotes;

})(this);
