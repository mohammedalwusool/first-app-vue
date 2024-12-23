import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import Help from '../views/Help.vue';
import Viewemployee from '../components/Viewemployee.vue';
import Editemployee from '../components/Editemployee.vue';
import Newemployee from '../components/Newemployee.vue';
import Dashboard from '../components/Dashboard.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/help',
    name: 'help',
    component: Help,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/viewemployee/:id',
    name: 'view-employee',
    component: Viewemployee,
  },
  {
    path: '/editemployee/:id',
    name: 'edit-employee',
    component: Editemployee,
  },
  {
    path: '/newemployee',
    name: 'new-employee',
    component: Newemployee,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
