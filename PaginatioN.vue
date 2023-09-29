<template>
  <div>
    <ul>
      <li v-for="item in currentPageData" :key="item.id">
        {{ item.id }}: {{ item.first_name }} {{ item.last_name }}
      </li>
    </ul>
    <v-page :total="totalPages" v-model="currentPage" @change="handlePageChange"></v-page>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import vPage from 'v-page'

const currentPage = ref(1)
const pageNumber = ref(3)
const exampleItems = ref([
  { id: 1, first_name: 'Sanjyot', last_name: 'Rajput' },
  { id: 2, first_name: 'Shital', last_name: 'Mali' },
  { id: 3, first_name: 'Vishal', last_name: 'Thorat' },
  { id: 4, first_name: 'Babli', last_name: 'Patil' },
  { id: 5, first_name: 'Pratik', last_name: 'Thakur' },
  { id: 6, first_name: 'Bhavesh', last_name: 'Agrawal' },
  { id: 7, first_name: 'Tejal', last_name: 'Jain' },
  { id: 8, first_name: 'Ronak', last_name: 'Bafna' },
  { id: 9, first_name: 'Palak', last_name: 'Shah' }
])

// Pagination properties
const itemsPerPage = 3
const totalPages = ref(exampleItems.value.length)

const handlePageChange = (p) => {
  currentPage.value = p.pageNumber
}

const currentPageData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return exampleItems.value.slice(startIndex, endIndex)
})
</script>
