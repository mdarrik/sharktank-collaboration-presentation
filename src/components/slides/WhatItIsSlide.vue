<template>
  <presentation-step-layout>
    <template v-slot:slide-heading>
      <h2 class="display-3 mb-5">What It Is</h2>
    </template>
    <ul class="display-2">
      <li>Centralized Collaboration Solution</li>
    </ul>
    <v-img
      :src="require('../../assets/undraw_collaboration.svg')"
      contain
      height="400px"
      width="600px"
    ></v-img>
  </presentation-step-layout>
</template>

<script>
import Vue from 'vue'
import PresentationStepLayout from '../PresentationStepLayout'
export default Vue.extend({
  name: 'what-it-is-slide',
  components: { PresentationStepLayout },
})
</script>
