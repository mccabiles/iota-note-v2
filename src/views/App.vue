<template>
  <v-app>
    <app-toolbar/>
    <app-navigation/>
    <v-content>
      <router-view/>
      <create-dialog v-model="showCreate"/>
      <v-btn color="accent" fab fixed bottom right large @click="showCreate = !showCreate">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-content>
  </v-app>
</template>

<script>
import AppToolbar from '@/components/AppToolbar'
import AppNavigation from '@/components/AppNavigation'
import CreateDialog from './Create'
  export default {
    name: 'IndexView',
    components: {
      AppNavigation,
      AppToolbar,
      CreateDialog,
    },
    
    data() {
      return {
        showCreate: false,
      };
    },
  }
</script>
