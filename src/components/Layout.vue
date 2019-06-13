<template>
  <v-app>
    <header>
      <v-toolbar app absolute class="primary white--text">
        <v-layout row justify-start align-items-center>
          <v-toolbar-title class="mr-4">
            <router-link active-class to="/" class="white--text"
              >L&I IT Shark Tank Presentation</router-link
            >
          </v-toolbar-title>
          <v-img
            :src="require('../assets/shark.svg')"
            width="2.5em"
            height="2.5em"
            class="shrink"
          ></v-img>
        </v-layout>
      </v-toolbar>
    </header>
    <v-content>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-content>
    <v-footer app class="d-flex row justify-space-between" height="auto">
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
      <router-link to="/about">About this Site</router-link>
    </v-footer>
  </v-app>
</template>
<style scoped>
footer.v-footer {
  position: initial;
}
footer cite {
  font-style: normal;
}
.v-toolbar__title a {
  text-decoration: none;
}
</style>
