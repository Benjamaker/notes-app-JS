var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed:" + assertionToCheck + "is not truthy")
    } else {
      console.log("%c Your test passed!!", "color: green");
    }
  }
};

function testGetText() {
  const note = new Note("Hello");
  assert.isTrue(note.text === "Hello");
};
testGetText();

function testCreateNote() {
  const x = new NoteList();
  assert.isTrue(x.createNote("one note").getText() === "one note");
  assert.isTrue(x.createNote("other note"));
  assert.isTrue(x.notes.length === 2);
};
testCreateNote();

function testNoteArray() {
  const n = new NoteList();
  n.createNote("first thing");
  n.createNote("second thing");
  assert.isTrue(n.notes.length === 2);
  assert.isTrue(n.displayNotes()[0].getText() === "first thing");
  assert.isTrue(n.displayNotes()[1].getText() === "second thing");
};
testNoteArray();

function testNoteListViewInstantiatesWithNoteList(){
  const n = new NoteList();
  n.createNote("first thing");
  n.createNote("second thing");
  const p = new NoteListView(n);
  assert.isTrue(p.notelist.notes.length === 2);
};
testNoteListViewInstantiatesWithNoteList();

function testNoteView(){
  const n = new NoteList();
  n.createNote("first thing");
  n.createNote("second thing");
  const p = new NoteListView(n);
  assert.isTrue(p.viewNotes() === "<ul><li><div>first thing</div></li><li><div>second thing</div></li></ul>")
};
testNoteView();

function aNoteControllerCanBeInstantiated(){
  const nl = new NoteList();
  nl.createNote("first thing");
  nl.createNote("second thing");
  const nc = new NoteController(nl);
  assert.isTrue(nc.noteListView.notelist === nl);
};
aNoteControllerCanBeInstantiated();

function testGetHTMLReturnsCorrectHTML(){
  function DoubleList() {
    this.notes = [{text: "fake note 1"} , {text: "fake note 2"}]
  };
  const dl = new DoubleList();
  const nc = new NoteController(dl);
  assert.isTrue(nc.getHTML() === "<ul><li><div>fake note 1</div></li><li><div>fake note 2</div></li></ul>")
};
testGetHTMLReturnsCorrectHTML();
