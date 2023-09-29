<template>
  <div>
    <h1>Computed Properties</h1>
    <input v-model="firstName" />
    <input v-model="lastName" />
    <h1>{{ updateCamelCaseName }}</h1>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

let firstName = ref('')
let lastName = ref('')

const updateCamelCaseName = computed(() => {
  return `${firstName.value.charAt(0).toUpperCase()}${firstName.value
    .slice(1)
    .toLowerCase()} ${lastName.value.charAt(0).toUpperCase()}${lastName.value
    .slice(1)
    .toLowerCase()}`
})
</script>
