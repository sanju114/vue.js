<template>
  <div>
    <h1>User Data</h1>
    <div>
      <label for="rollNo">Roll No:</label>
      <input type="text" id="rollNo" v-model="rollNo" />
    </div>
    <div>
      <label for="first_name">First Name:</label>
      <input type="text" id="first_name" v-model="first_name" />
    </div>
    <div>
      <label for="last_name">Last Name:</label>
      <input type="text" id="last_name" v-model="last_name" />
    </div>
    <div>
      <label for="course">Course:</label>
      <input type="text" id="course" v-model="course" />
    </div>
    <button @click="insertList">Insert</button>
    <p v-for="item in list" :key="item.id">{{ item }}</p>
  </div>
</template>

<script>
import postRequest from './services/post'

export default {
  data() {
    return {
      list: [],
      rollNo: '',
      first_name: '',
      last_name: '',
      course: ''
    }
  },
  methods: {
    async insertList() {
      const requestData = {
        rollNo: this.rollNo,
        first_name: this.first_name,
        last_name: this.last_name,
        course: this.course
      }

      try {
        //  console.log()
        const url = import.meta.env.VITE_SOME_KEY
        const response = await postRequest('post', url, requestData)
        this.list = response
      } catch (error) {
        console.error('Error:', error)
      }
    }
  }
}
</script>
