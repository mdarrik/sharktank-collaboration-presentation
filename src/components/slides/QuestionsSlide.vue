<template>
  <presentation-step-layout>
    <template v-slot:slide-heading>
      <h2 class="display-4 mb-5">Questions?</h2>
      <v-img
        :src="require('../../assets/undraw_questions.svg')"
        contain
        height="500px"
        width="600px"
      ></v-img>
    </template>
  </presentation-step-layout>
</template>

<script>
import Vue from 'vue'
import PresentationStepLayout from '../PresentationStepLayout'
export default Vue.extend({
  name: 'why-we-need-it-slide',
  components: { PresentationStepLayout },
})
</script>
