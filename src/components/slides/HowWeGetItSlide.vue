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
          <dd><strong>$17</strong> per user/month</dd>
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
<style>
dl {
  padding-left: 3rem;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: [dt] 45% [dd] 65%;
  grid-template-rows: 1fr 1fr 1fr;
}
dt {
  display: list-item;
  list-style-image: url('../../assets/star-outline.svg');
}
dd {
  display: inline-block;
}
</style>
