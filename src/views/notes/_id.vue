<template>
	<v-container>
		<note-form :note="note" @on:save="updateNote" />
	</v-container>
</template>

<script>
import NoteForm from '@/components/NoteForm'

export default {
	name: 'ViewNote',
	components: {
		NoteForm,
	},

	props: [ 'id' ],

	data() {
		return {
			note: {}
		};
	},

	mounted() {
		const note = this.$store.getters['notes/byId'](this.id);
 		this.note = Object.assign({}, note);
	},

	methods: {
		updateNote(note) {
			this.$store.dispatch('notes/updateNote', { id: this.id, note });
			this.$router.push({ name: 'index' });
		},
	},
}
</script>