

function testGetText() {
  const note = new Note("Hello");
  assert.isTrue(note.text === "Hello");
};
testGetText();

function testCreateNote() {
  const x = new NoteList();
  x.createNote("one note");
  x.createNote("other note");
  assert.isTrue(x.notes[0].getText() === "one note");
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
  console.log(p.viewNotes());
  assert.isTrue(p.viewNotes() === '<ul><li><div><a href="#notes/0">first thing</a></div></li><li><div><a href="#notes/1">second thing</a></div></li></ul>');
};
testNoteView();

function testNoteControllerCanBeInstantiated(){
  const nl = new NoteList();
  nl.createNote("first thing");
  nl.createNote("second thing");
  const nc = new NoteController(nl);
  assert.isTrue(nc.noteListView.notelist === nl);
};
testNoteControllerCanBeInstantiated();

function testGetHTMLReturnsCorrectHTML(){
  const dl = new DoubleList();
  const nc = new NoteController(dl);
  console.log(nc.getHTML());
  assert.isTrue(nc.getHTML() === '<ul><li><div><a href="#notes/0">fake note 1</a></div></li><li><div><a href="#notes/1">fake note 2</a></div></li></ul>');
};
testGetHTMLReturnsCorrectHTML();

function testSingleNoteViewCanBeInstantiatedAndTakesANoteAsParameter(){
  const n = new Note("this is a note");
  const snv = new SingleNoteView(n);
  assert.isTrue(snv.note === n);
};
testSingleNoteViewCanBeInstantiatedAndTakesANoteAsParameter();

function testSingleNoteViewReturnsCorrectHTML(){
  n = new Note("this is another note");
  snv = new SingleNoteView(n);
  assert.isTrue(snv.getSingleNoteHTML() === `<div>this is another note</div>`);
};
testSingleNoteViewReturnsCorrectHTML();

function testDisplayFirst20Characters(){
  const nl = new NoteList();
  nl.createNote("this is more than 20 characters so should not be fully displayed!");
  const nlv = new NoteListView(nl);
  assert.isTrue(nlv.viewNotes() === '<ul><li><div><a href="#notes/0">this is more than 20</a></div></li></ul>');
};
testDisplayFirst20Characters();

function testNoteHasID(){
  const nl1 = new NoteList();
  nl1.createNote("first thing");
  nl1.createNote("second thing");
  assert.isTrue(nl1.notes[0].noteID === 0);
  assert.isTrue(nl1.notes[1].noteID === 1);
};
testNoteHasID();
