import { RouteConfig }                          from 'vue-router';
import DevelopmentPage                          from '@/componentsDevelopment/developmentPage/DevelopmentPage';

export default class DevelopmentRoutes {

    public static register(): RouteConfig {

        const route: RouteConfig = {
          path: '/development',
          name: 'development',
          component: DevelopmentPage,
        };
        return route;
      }
}
