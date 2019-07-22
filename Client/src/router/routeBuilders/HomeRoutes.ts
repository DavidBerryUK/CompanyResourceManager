import { RouteConfig }                          from 'vue-router';
import HomePage                                 from '@/componentsBusinessGui/home/HomePage.vue';

export default class HomeRoutes {

    public static register(): RouteConfig {

        const route: RouteConfig = {
          path: '/home',
          name: 'home',
          component: HomePage,
        };
        return route;
      }
}
