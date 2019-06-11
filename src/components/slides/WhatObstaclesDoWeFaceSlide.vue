<template>
  <presentation-step-layout>
    <template v-slot:slide-heading>
      <h2 class="display-3 mb-5">What Obstacles Do We Face</h2>
    </template>
    <ul class="display-2">
      <li>
        No Adoption
        <ul>
          <li>Idea Is Well Wanted</li>
          <li>Actions To Support Adoption</li>
          <ul>
            <li>Upper Management Support</li>
            <li>Enthusiastic Early Adopter Group</li>
          </ul>
        </ul>
      </li>
    </ul>
  </presentation-step-layout>
</template>

<script>
import Vue from 'vue'
import PresentationStepLayout from '../PresentationStepLayout'
export default Vue.extend({
  name: 'what-obstacles-do-we-face-slide',
  components: { PresentationStepLayout },
})
</script>
