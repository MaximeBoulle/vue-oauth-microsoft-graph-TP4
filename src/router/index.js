import { createRouter, createMemoryHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ConversationIndexPage from '../pages/ConversationIndexPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/conversations', component: ConversationIndexPage },
    { path: '/conversations/:id', component: ConversationIndexPage },
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

export default router; 