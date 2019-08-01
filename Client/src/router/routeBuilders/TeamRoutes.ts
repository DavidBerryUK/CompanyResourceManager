import { RouteConfig }                          from 'vue-router';
import MasterDetailPage                         from '@/componentsCommonGui/masterDetail/MasterDetailPage.vue';
import TeamList                                 from '@/componentsBusinessGui/team/list/TeamList';
import EntityPageTeamComponent                  from '@/componentsBusinessGui/team/detail/detailPage/EntityPageTeamComponent';

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
                detail: EntityPageTeamComponent,
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
