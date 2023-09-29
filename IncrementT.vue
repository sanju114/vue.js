<template>
  <div>
    <h1>Conditional Rendering</h1>

    <div style="border: 2px solid black; padding: 15px">
      <h1 style="margin: 0" v-if="awesome">Vue is awesome!</h1>

      <div v-else-if="type === 'A'">A</div>

      <div v-else-if="type === 'B'">B</div>

      <div v-else-if="type === 'C'">C</div>

      <h1 v-else>Not A, B, C</h1>
      <h1>{{ count }}</h1>
      <h2>{{ store._state.data.message }}</h2>
      <button @click="handleHeading">change heading</button>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
      <button @click="toggleAwesome">Toggle</button>
      <button @click="displayType">Show Type</button>
      <input v-model="count" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, withModifiers } from 'vue'
import { useStore } from 'vuex'

const awesome = ref(true)
let count = ref(0)
let firstName = ref('')
let lastName = ref('')
const type = ref('A')

// Created Store
const store = useStore()

// Heading: H2 change handler
const handleHeading = () => {
  store.commit('changeHeading', 'HI I AM CHANGED')
}

const increment = () => {
  if (count.value < 5) {
    count.value++
  } else {
    alert('Stop counting')
  }
}

const decrement = () => {
  if (count.value > 0) {
    count.value--
  } else {
    alert('stop counting')
  }
}

const toggleAwesome = () => {
  awesome.value = !awesome.value
}

const displayType = () => {
  alert(`Current type is: ${type.value}`)
}
</script>
