import { RouteConfig }                          from 'vue-router';
import EntityPageJobRoleComponent               from '@/componentsBusinessGui/jobRole/detail/detailPage/EntityPageJobRoleComponent';
import JobRoleList                              from '@/componentsBusinessGui/jobRole/list/JobRoleList.vue';
import MasterDetailPage                         from '@/componentsCommonGui/masterDetail/MasterDetailPage.vue';

export default class JobRoleRoutes {

    public static register(): RouteConfig {

        const route: RouteConfig = {
          path: '/jobrole',

          component: MasterDetailPage,
          children: [
            {
              name: 'jobrole',
              path: '',
              components: {
                navigation: JobRoleList,
              },
            },
            {
              name: 'JobRoleView',
              path: ':id/view',
              components: {
                navigation: JobRoleList,
                detail: EntityPageJobRoleComponent,
              },
              props: {
                navigation: true,
                detail: true,
              },
            },
            {
              name: 'JobRoleNew',
              path: 'new',
              components: {
                navigation: JobRoleList,
                detail: EntityPageJobRoleComponent,
              },
              props: {
                navigation: true,
                detail: true,
              },
            },
          ],
        };

        return route;
      }
}
