import { RouteConfig }                          from 'vue-router';
import AboutPage                                from '@/componentsBusinessGui/about/AboutPage.vue';

export default class AboutRoutes {

    public static register(): RouteConfig {

        const route: RouteConfig = {
          path: '/about',
          name: 'about',
          component: AboutPage,
        };
        return route;
      }
}
