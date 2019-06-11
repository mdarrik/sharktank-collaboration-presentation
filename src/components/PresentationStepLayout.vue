<template>
  <v-layout tag="section" column align-center justify-center xs10>
    <slot name="slide-heading"></slot>
    <slot></slot>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PresentationStepLayout',
})
</script>
