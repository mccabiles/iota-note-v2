<template>
  <v-navigation-drawer app>
    <v-list>
      <template v-for="(link, i) in links" >
        <v-spacer v-if="link.spacer" :key="i"/>
        <v-list-tile v-else :key="i" :to="link.to">
          {{ link.text }}
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
const links = [
  { text: 'My Notes', to: { name: 'index' } },
  { text: 'Formatting Guide' },
  { text: 'How It Works' },
  { spacer: true },
  { text: 'Contact Me' },
];

export default {
  name: 'AppNavigation',
  data() {
    return {
      links,
    }
  }
};
</script>
