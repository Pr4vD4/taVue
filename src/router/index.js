import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import IndexView from "@/views/IndexView.vue";
import LoginView from "@/views/LoginView";
import ProfileView from "@/views/ProfileView";

function f() {
  return [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
  ];
}
const routes = [
    ...f()
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
