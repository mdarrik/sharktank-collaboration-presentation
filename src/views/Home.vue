<template>
  <v-layout align-center justify-center>
    <v-flex xs10>
      <v-card>
        <v-img
          :src="require('../assets/undraw_software_engineer_lvl5.svg')"
          contain
          height="300px"
        ></v-img>
        <v-card-title class="d-block text-xs-center">
          <h1>Improving Developer Collaboration</h1>
          <h2>By Isaac Ortiz, Darrik Moberg, & Ken Grubb</h2>
        </v-card-title>
        <v-card-actions>
          <v-layout row wrap align-center justify-center>
            <v-btn to="/Presentation">Begin</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'home',
})
</script>
