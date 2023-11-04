import { createRouter, createWebHistory } from 'vue-router';

import ChartPage from './pages/chart/ChartPage.vue';
import SavedFile from './pages/saved/SavedFile.vue';
import SankeyChart from './pages/chart/charts/SankeyChart.vue';
import LoginPage from './pages/auth/LoginPage.vue';
import store from './store/index.js';
import frame1 from './pages/saved/iFrames/iFrameOne.vue';
import frame2 from './pages/saved/iFrames/iFrameTwo.vue';
import frame3 from './pages/saved/iFrames/iFrameThree.vue';
import frame4 from './pages/saved/iFrames/iFrameFour.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/chart' },
    { path: '/chart', component: ChartPage },
    { path: '/chart/sankey', component: SankeyChart},
    {path: '/login', component: LoginPage, meta: {requiresNoAuth: true}},
    {path: '/saved', component: SavedFile, meta: {requiresAuth: true}},
    { path: '/iframe1', component: frame1, meta: { requiresAuth: false, hideHeader: true }},
    { path: '/iframe2', component: frame2, meta: { requiresAuth: false, hideHeader: true }},
    { path: '/iframe3', component: frame3, meta: { requiresAuth: false, hideHeader: true }},
    { path: '/iframe4', component: frame4, meta: { requiresAuth: false, hideHeader: true }},
      ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/login');
  } else if (to.meta.requiresNoAuth && store.getters.isAuthenticated) {
    next('/chart');
  } else {
    next();
  }
});

export default router;
