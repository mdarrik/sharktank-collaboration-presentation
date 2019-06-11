<template>
  <presentation-step-layout>
    <template v-slot:slide-heading>
      <h2 class="display-3 mb-5">How We&apos;ll Get It</h2>
    </template>
    <ul class="display-2">
      <li>Use a Discussion/Q&amp;A Forum</li>
      <li>COTS</li>
      <li>
        Options:
        <dl>
          <dt>
            <a href="https://stackoverflow.com/">Stack Overflow</a>
          </dt>
          <dd>
            <strong>$17</strong> per user/month (~$50,000/year for 250 users)
          </dd>
          <dt>
            <a href="https://www.discourse.org/">Discourse</a>
          </dt>
          <dd><strong>$0</strong> per month (Self-Hosted)</dd>
          <dt>
            <a href="https://dev.to">Dev.TO</a>
          </dt>
          <dd><strong>$0</strong> per month (Self-Hosted)</dd>
        </dl>
      </li>
    </ul>
  </presentation-step-layout>
</template>

<script>
import Vue from 'vue'
import PresentationStepLayout from '../PresentationStepLayout'
export default Vue.extend({
  name: 'how-we-get-it-slide',
  components: { PresentationStepLayout },
})
</script>
