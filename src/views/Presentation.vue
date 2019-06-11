<template>
  <v-layout align-center justify-center>
    <v-flex xs10>
      <v-card class="flex-card">
        <v-stepper class="elevation-0 full-height" v-model="currentStep" grow>
          <v-stepper-header class="mb-5">
            <v-stepper-step
              :complete="currentStep > 1"
              step="1"
              editable
              edit-icon="check"
              @click="setStep(1)"
              >What It Is</v-stepper-step
            >
            <v-divider></v-divider>
            <v-stepper-step
              :complete="currentStep > 2"
              step="2"
              editable
              edit-icon="check"
              @click="setStep(2)"
              >Why We Need It</v-stepper-step
            >
            <v-divider></v-divider>
            <v-stepper-step
              :complete="currentStep > 3"
              step="3"
              editable
              @click="setStep(3)"
              edit-icon="check"
              >How We&apos;ll Get It</v-stepper-step
            >
            <v-divider></v-divider>
            <v-stepper-step
              :complete="currentStep > 4"
              step="4"
              editable
              @click="setStep(4)"
              edit-icon="check"
              >What are the obstacles</v-stepper-step
            >
            <v-divider></v-divider>
            <v-stepper-step editable step="5" @click="setStep(5)"
              >Questions?</v-stepper-step
            >
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <what-it-is-slide />
            </v-stepper-content>
            <v-stepper-content step="2">
              <why-we-need-it-slide />
            </v-stepper-content>
            <v-stepper-content step="3">
              <how-we-get-it-slide />
            </v-stepper-content>
            <v-stepper-content step="4">
              <what-obstacles-do-we-face-slide />
            </v-stepper-content>
            <v-stepper-content step="5">
              <questions-slide />
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
        <v-card-actions>
          <v-btn color="secondary">
            <v-icon>arrow_back</v-icon>
            <v-spacer></v-spacer>Back
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" aria-label="Forward" @click="incrementStep">
            Forward
            <v-spacer></v-spacer>
            <v-icon medium>arrow_forward</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import Vue from 'vue'
import WhatItIsSlide from '../components/slides/WhatItIsSlide'
import WhyWeNeedItSlide from '../components/slides/WhyWeNeedItSlide'
import HowWeGetItSlide from '../components/slides/HowWeGetItSlide'
import WhatObstaclesDoWeFaceSlide from '../components/slides/WhatObstaclesDoWeFaceSlide'
import QuestionsSlide from '../components/slides/QuestionsSlide'
export default Vue.extend({
  components: {
    WhatItIsSlide,
    WhyWeNeedItSlide,
    HowWeGetItSlide,
    WhatObstaclesDoWeFaceSlide,
    QuestionsSlide,
  },
  data() {
    return {
      currentStep: 1,
    }
  },
  methods: {
    incrementStep: function() {
      if (this.currentStep >= 5) {
        this.currentStep = 5
        return
      }
      this.currentStep++
    },
    decrementStep: function() {
      if (this.currentStep <= 1) {
        this.currentStep = 1
        return
      }
      this.currentStep--
    },
    setStep: function(step) {
      this.currentStep = step
    },
  },
})
</script>
<style>
ul {
  list-style-image: url('../assets/star.svg');
  list-style-position: outside;
  padding-left: 2em;
}
li,
dd {
  margin-bottom: 2rem;
  padding-left: 12px;
}

.star-list-image {
  list-style-image: url('../assets/star.svg');
}
.star-outline-list-image {
  list-style-image: url('../assets/star-outline.svg');
}

.full-height {
  min-height: 800px;
}

.flex-card {
  display: flex;
  flex-direction: column;
}
</style>
