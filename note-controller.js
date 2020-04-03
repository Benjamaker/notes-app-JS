(function(exports) {

  function NoteController(noteList){
    this.noteListView = new NoteListView(noteList);
  };

  NoteController.prototype.getHTML = function(){
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.viewNotes();
    return element.innerHTML;
  };



  exports.NoteController = NoteController;

})(this);



notelist = new NoteList()
notelist.createNote("Fave drink: beer");
notelist.createNote("Fave food: Pizza");
notelist.createNote("This is a really long note  over 20 char");
controller = new NoteController(notelist)

controller.getHTML();
