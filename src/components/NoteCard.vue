<template>
	<v-flex md4 p-4>
		<v-card @click="viewNote">
			<v-card-title class="title">
				{{ note.title }}
			</v-card-title>

			<v-card-text>
				{{ note.body }}
			</v-card-text>
		</v-card>
	</v-flex>
</template>

<script>
export default {
	name: 'NoteCard',
	props: [ 'note' ],
	methods: {
		viewNote() {
			this.$router.push({ name: 'view.note', params: { id: this.note.id } });
		},
	},
}
</script>