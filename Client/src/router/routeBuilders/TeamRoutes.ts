import { RouteConfig }                          from 'vue-router';
import MasterDetailPage                         from '@/componentsCommonGui/masterDetail/MasterDetailPage.vue';
import TeamEdit                                 from '@/componentsBusinessGui/team/edit/TeamEdit';
import TeamList                                 from '@/componentsBusinessGui/team/list/TeamList';
import TeamView                                 from '@/componentsBusinessGui/team/view/TeamView';

export default class TeamRoutes {

    public static register(): RouteConfig {

        const route: RouteConfig = {
          path: '/team',

          component: MasterDetailPage,
          children: [
            {
              name: 'team',
              path: '',
              components: {
                navigation: TeamList,
              },
            },

            {
              name: 'TeamView',
              path: ':id/view',
              components: {
                navigation: TeamList,
                detail: TeamView,
              },
              props: {
                navigation: true,
                detail: true,
              },
            },

            {
              name: 'TeamEdit',
              path: ':id/edit',
              components: {
                navigation: TeamList,
                detail: TeamEdit,
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
