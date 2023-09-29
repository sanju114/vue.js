import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './routes'

const store = createStore({
  state() {
    return {
      count: 0,
      message: 'This is cool'
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    changeHeading(state, msg) {
      state.message = msg
    }
  }
})

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
