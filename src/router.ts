import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './containers/Home.vue';
import DetailsPage from '@/containers/DetailsPage.vue';
import NotFound from '@/containers/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/details/:id', component: DetailsPage },
  { path: '/notFound', component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
