<template>
  <div>
    <h1>{{ heading }}</h1>
    <ChildComponent :message="message" :name="name" @change-radio="handleRadioBtn" />
    <p>{{ message }}, {{ name }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'
let message = 'Welcome'
const name = 'Sanjyot'
let heading = ref('Props')
const isLabelVisible = ref(false)
const toggleLabel = (isVisible) => {
  isLabelVisible.value = isVisible
}
const handleRadioBtn = (data) => {
  heading.value = data
}
</script>
