(function(exports) {

  function NoteListView(notelist) {
    this.notelist = notelist;
  }

NoteListView.prototype.viewNotes = function(){
  mapped = (this.notelist.notes).map(item => item.text)
  joined = mapped.join().replace(",", "</div></li><li><div>");
  finalOutput = "<ul><li><div>" + joined + "</div></li></ul>";
  console.log(finalOutput);
  return finalOutput;
};

exports.NoteListView = NoteListView;
exports.NoteListView.viewNotes = NoteListView.viewNotes;

})(this);