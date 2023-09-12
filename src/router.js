import { createRouter, createWebHistory } from 'vue-router';

import ChartPage from './pages/chart/ChartPage.vue';
import SavedFile from './pages/saved/SavedFile.vue';
import SankeyChart from './pages/chart/charts/SankeyChart.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/chart' },
    { path: '/chart', component: ChartPage },
    { path: '/chart/sankey', component: SankeyChart},
    {path: '/saved', component: SavedFile}
      ]
});

export default router;
