<template>
  <presentation-step-layout>
    <template v-slot:slide-heading>
      <h2 class="display-3 mb-5">Why We Need It</h2>
    </template>
    <ul class="display-2">
      <li>Consistent Collaboration &amp; Sharing</li>
      <li>Community Ownership</li>
      <li>Supports &amp; Improves Recent Shark Tank Ideas</li>
      <li>Improves Management-Staff Engagement</li>
    </ul>
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
