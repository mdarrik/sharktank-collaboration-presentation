<template>
  <v-app>
    <header>
      <v-toolbar clipped-left app absolute class="primary white--text">
        <v-toolbar-title>L&I IT Shark Tank Presentation</v-toolbar-title>
      </v-toolbar>
    </header>
    <v-content>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-content>
    <v-footer inset app>
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
