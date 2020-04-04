(function(exports) {

  function NoteController(notelist){
    this.noteListView = new NoteListView(notelist);
    this.singleNoteView();
  };

  NoteController.prototype.getHTML = function(){
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.viewNotes();
    return element.innerHTML;
  };


  NoteController.prototype.singleNoteView = function(){
    let noteControllerObject = this;
    window.addEventListener("hashchange", function(){
      this.getNoteIDFromUrl = function(location) {
        return location.hash.split("#notes/")[1];
      };

      this.displayNote = function(noteID) {
        noteControllerObject.noteListView.notelist.notes.map(note => {
          if (note.noteID === Number(noteID)) {
            let snv = new SingleNoteView(note);
            let fullNote = document.getElementById("fullnote");
            fullNote.innerHTML = snv.getSingleNoteHTML();
          };
        });
      };
      this.displayNote(this.getNoteIDFromUrl(window.location));
    });
  };

  exports.NoteController = NoteController;

})(this);



notelist = new NoteList()
notelist.createNote("Fave drink: beer");
notelist.createNote("Fave food: Pizza");
notelist.createNote("This is a really long note  over 20 char");
controller = new NoteController(notelist)

controller.getHTML();
