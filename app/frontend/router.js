import { createWebHistory, createRouter } from 'vue-router';
import UserRoutes from './resources/users/routes.js';
import Dashboard from '@/components/shared/Dashboard.vue';

const DashboardRoute = { path: '', name: 'dashboard', component: Dashboard };

const BASE_PATH = process.env.RAILS_RELATIVE_URL_ROOT;

const router = createRouter({
  history: createWebHistory(BASE_PATH),
  routes: [...UserRoutes, DashboardRoute]
});

export default router;
