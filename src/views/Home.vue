<template>
  <v-app>
    <app-toolbar/>
    <app-navigation/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import AppToolbar from '@/components/AppToolbar'
import AppNavigation from '@/components/AppNavigation'
  export default {
    components: {
      AppNavigation,
      AppToolbar,
    }
  }
</script>
