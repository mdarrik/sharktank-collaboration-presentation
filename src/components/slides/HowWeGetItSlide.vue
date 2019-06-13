<template>
  <presentation-step-layout>
    <template v-slot:slide-heading>
      <h2 class="display-3 mb-5">How We&apos;ll Get It</h2>
    </template>
    <ul>
      <dl>
        <dt class="display-1">
          <a href="https://stackoverflow.com/">Stack Overflow</a>
        </dt>
        <dd class="title">
          <ul>
            <li><strong>$17</strong> per user/month</li>
            <li>Most Familiar (> 1,000,000 users)</li>
            <li>Only High Cost Options Available</li>
          </ul>
        </dd>
        <dt class="display-1">
          <a href="https://www.discourse.org/">Discourse</a>
        </dt>
        <dd class="title">
          <ul>
            <li>
              <strong>$0</strong>
              per month (Self-Hosted)
            </li>
            <li>Familiar Format &amp; Free to use</li>
          </ul>
        </dd>
        <dt class="display-1">
          <a href="https://dev.to">Dev.TO</a>
        </dt>
        <dd class="title">
          <ul>
            <li><strong>$0</strong> per month (Self-Hosted)</li>
            <li>Well Designed for longer posts like tutorials</li>
            <li>Not Strictly a Q&amp;A Forum</li>
          </ul>
        </dd>
      </dl>
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
  display: grid;
  grid-template-columns: [dt] 45% [dd] 65%;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 5px;
}
dt {
  display: list-item;
  list-style-image: url('../../assets/star-outline.svg');
}
dd ul {
  list-style: none;
}
dd ul li {
  margin-bottom: 0.8em;
}
</style>
