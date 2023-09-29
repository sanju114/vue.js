<template>
  <div style="border: 2px solid black">
    <input
      type="radio"
      id="html"
      name="fav_language"
      value="HTML"
      @click="$emit('changeRadio', 'HTML')"
    />
    <label for="html">HTML</label><br />
    <input
      type="radio"
      id="css"
      name="fav_language"
      value="CSS"
      @click="$emit('changeRadio', 'CSS')"
    />
    <label for="css">CSS</label><br />
    <input
      type="radio"
      id="javascript"
      name="fav_language"
      value="JavaScript"
      @click="$emit('changeRadio', 'JS')"
    />
    <label for="javascript">JavaScript</label>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const { message, name } = defineProps(['message', 'name'])
</script>
