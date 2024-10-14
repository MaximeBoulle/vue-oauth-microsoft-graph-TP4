import { createRouter, createMemoryHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ConversationIndexPage from '../pages/ConversationIndexPage.vue'

import store from '../main.js';

const routes = [
  { path: '/', component: HomePage },
  { 
    path: '/conversations', 
    component: ConversationIndexPage, 
    meta: { requiresAuth: true }
  },
  { 
    path: '/conversations/:id', 
    component: ConversationIndexPage, 
    meta: { requiresAuth: true } 
},
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isAuthenticated = store.state.user !== null;
    if (!isAuthenticated) {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;