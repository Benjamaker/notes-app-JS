(function(exports) {

  function NoteListView(notelist) {
    this.notelist = notelist;
  }

NoteListView.prototype.viewNotes = function(){
  let joined;
  let mapped = (this.notelist.notes).map(item => {
    let link = this.limitedString(item.text);
    if (joined == null) {
      joined = `<li><div><a href="#notes/${item.noteID}">${link}</a></div></li>`
    } else {
      joined += `<li><div><a href="#notes/${item.noteID}">${link}</a></div></li>`
    }
  });
  let finalOutput = "<ul>" + joined + "</ul>";
  return finalOutput;
};

NoteListView.prototype.getNoteID = function(){
  let id = (this.notelist.notes).map(item => item.noteID);
};

NoteListView.prototype.limitedString = function(string){
  if (string.length > 20) {
    return string.substr(0, 20);
  } else {
    return string
  }
};

exports.NoteListView = NoteListView;
exports.NoteListView.viewNotes = NoteListView.viewNotes;

})(this);
