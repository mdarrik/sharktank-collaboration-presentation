<template>
  <presentation-step-layout>
    <template v-slot:slide-heading>
      <h2 class="display-3 mb-5 font-weight-bold">What Obstacles Do We Face</h2>
    </template>
    <ul class="display-2 font-weight-bold">
      <li>
        No Adoption
        <ul class="display-2 star-outline-list-image">
          <li>Idea Is Well Wanted</li>
          <li>
            Can Take Action to Support Adoption
            <ul class="star-outline-list-image display-1">
              <li>Garner Support From Management</li>
              <li>Utilize An Enthusiastic Early Adopter Group</li>
            </ul>
          </li>
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
<style scoped>
ul {
  margin-top: 2rem;
  text-align: left;
}
.star-outline-list-image li {
  vertical-align: top;
}
</style>
