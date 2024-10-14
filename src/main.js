import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const store = createStore({
  state () {
    return {
      user: null
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  }
})

createApp(App).use(vuetify).use(store).mount('#app')



