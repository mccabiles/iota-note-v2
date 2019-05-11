import Note from '@/models/Note'

const state = {
	notes: [],
};

const getters = {
	byId(state) {
		return noteId => state.notes.find(({ id }) => id === noteId );
	},

	notesForEditing(state) {
		return state.notes.filter(({ status }) => status === Note.STATUS_FOR_BODY);
	},
};

const mutations = {
	setNotes(state, notes) { state.notes = notes; },
};

const actions = {
	getNotes({ commit }) {
		commit('setNotes', Note.getNotes());
	},

	saveNote({dispatch}, note) {
		Note.saveNote(note);
		dispatch('getNotes');
	},

	updateNote({ dispatch }, { id, note }) {
		Note.updateNote(id, note);
		dispatch('getNotes');
	},

	deleteNote({ dispatch }, id) {
		Note.deleteNote(id);
		dispatch('getNotes');
	},
};

export default {
	state,
	getters,
	mutations,
	actions,
	namespaced: true,
};