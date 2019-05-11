<template>
	<v-container>
		<v-layout wrap>
			<note-card v-for="note in notes"
				:key="note.id"
				:note="note"
			/>
		</v-layout>
	</v-container>
</template>

<script>
import NoteCard from '@/components/NoteCard'

export default {
	components: {
		NoteCard,
	},

  computed: {
  	notes () { return this.$store.getters['notes/notesForEditing']; }
  },

  mounted() {
  	this.$store.dispatch('notes/getNotes');
  },
}
</script>