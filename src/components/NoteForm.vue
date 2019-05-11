<template>
  <v-form>
    <v-text-field label="Title" :hint="titleHint" v-model="noteData.title"/>
    <v-textarea label="Notes" :hint="bodyHint" v-model="noteData.body"/>
    <v-btn color="primary" @click="$emit('on:save', noteData)"> Save Note </v-btn>
  </v-form>
</template>

<script>
import Note from '@/models/Note'

export default {
  name: 'NoteForm',
  props: {
    note: {
      type: Object,
      default: () => new Note(),
    }
  },

  computed: {
    titleHint() { return 'Give your note a title'; },
    bodyHint() { return 'No need to be too neat at this point!'; },
  },

  data() {
    return {
      noteData: new Note(),
    };
  },

  watch: {
    'note': {
      immediate: true,
      handler() {
        this.noteData = this.note;
      }
    }
  },
}
</script>