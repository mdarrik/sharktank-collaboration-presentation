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
      <v-layout tag="section" class="caption" column shrink>
        <h2 class="caption bold">Attributions</h2>
        <cite>
          Floating Cogs: Steve Schoger's
          <a href="https://www.heropatterns.com">Hero Patterns</a>
          <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
        </cite>
        <cite class="grow">
          Large Splash Images from Katerina Limpitsouni's
          <a href="https://undraw.co">unDraw</a>
        </cite>
        <div>
          Shark Icon made by
          <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from
          <a href="https://www.flaticon.com/" title="Flaticon"
            >www.flaticon.com</a
          >
          is licensed by
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
            >CC 3.0 BY</a
          >
        </div>
      </v-layout>
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
