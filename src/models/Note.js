const localStorage = window.localStorage;

class API {
	static get(key) {
		return JSON.parse(localStorage.getItem(key)) || [];
	}

	static saveItem(key, item) {
  	localStorage.setItem(key, JSON.stringify(item));
	}
}

export default class Note {
	static STATUS_FOR_BODY = 1;
	static STATUS_FOR_REVIEW = 2;
	static STATUS_FOR_SUMMARY = 3;
	static STATUS_STORE = 4; 

  constructor() {
    this.title = "New Title";
    this.body = "";
    this.cues = "";
    this.summary = "";
    this.status = Note.STATUS_FOR_BODY;
  }

  static getNotes() {
  	return API.get('notes');
  }

  static saveNote(note) {
  	const notes = Note.getNotes();
  	note.id = new Date().getTime();
  	notes.push(note);
  	API.saveItem('notes', notes);
  }

  static updateNote(noteId, note) {
  	const notes = Note.getNotes();
  	const index = notes.findIndex(({ id }) => id === noteId);
  	notes.splice(index, 1, Object.assign(notes[index], note));
  	API.saveItem('notes', notes);
  }

  static deleteNote(noteId) {
  	const notes = Note.getNotes();
  	const index = notes.findIndex(({ id }) => id === noteId);
  	notes.splice(index, 1);
  	API.saveItem('notes', notes);
  }
}