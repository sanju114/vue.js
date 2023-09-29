<template>
  <div>
    <h1>State Management</h1>
    <button @click="store.increment()">Button B:{{ store.count }}</button>
  </div>
</template>
<script setup>
import { store } from './store'
</script>
