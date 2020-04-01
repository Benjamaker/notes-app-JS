(function(exports) {

  function NoteController(noteList){
    this.noteListView = new NoteListView(noteList);
  };

  NoteController.prototype.getHTML = function(){
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.viewNotes();
    console.log(element.innerHTML);
    return element.innerHTML;
  };

  exports.NoteController = NoteController;

})(this);
