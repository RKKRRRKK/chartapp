import { createRouter, createWebHistory } from 'vue-router';

import ChartPage from './pages/chart/ChartPage.vue';
import SavedFile from './pages/saved/SavedFile.vue';
import SankeyChart from './pages/chart/charts/SankeyChart.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/chart' },
    { path: '/chart', component: ChartPage },
    { path: '/chart/sankey', component: SankeyChart},
    {path: '/auth', component: UserAuth, meta: {requiresNoAuth: true}},
    {path: '/saved', component: SavedFile, meta: {requiresAuth: true}}
      ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/chart');
  } else {
    next();
  }
});

export default router;
