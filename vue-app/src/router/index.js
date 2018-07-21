import Vue from 'vue';
import Router from 'vue-router';
import About from '@/components/About';
import TopSelling from '@/components/TopSelling';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/main',
      name: 'TopSelling',
      component: TopSelling,
    },
    {
      path: '',
      redirect: '/main',
    },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});
