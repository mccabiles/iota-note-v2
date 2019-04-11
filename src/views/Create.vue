<template>
  <v-dialog fullscreen :value="value" v-on="$listeners">
    <v-card>
      <v-toolbar dark class="title" color="primary" flat>
        Create New Note
        <v-spacer/>
        <v-btn flat icon @click="$emit('input', false)"><v-icon>mdi-close</v-icon></v-btn>
      </v-toolbar>

      <v-card-text>
        <note-form :note="note" @on:save="onSave"/>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import NoteForm from '@/components/NoteForm'

class Note {
  constructor() {
    this.title = "New Title";
    this.body = "";
  }
}

export default {
  name: 'NoteCreateView',
  components: {
    NoteForm,
  },

  props: {
    value: Boolean
  },

  data() {
    return {
      note: new Note(),
    }
  },

  watch: {
    value(val) {
      this.note = new Note();
    }
  },

  methods: {
    onSave(note) {
      this.note = note;
      // save to storage
    }
  },
}
</script>