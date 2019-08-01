import { RouteConfig }                          from 'vue-router';
import MasterDetailPage                         from '@/componentsCommonGui/masterDetail/MasterDetailPage.vue';
import SkillList                                from '@/componentsBusinessGui/skill/list/SkillList';
import EntityPageSkillComponent                 from '@/componentsBusinessGui/skill/detail/detailPage/EntityPageSkillComponent';


export default class SkillRoutes {

    public static register(): RouteConfig {

        const route: RouteConfig = {
          path: '/skill',

          component: MasterDetailPage,
          children: [
            {
              name: 'skill',
              path: '',
              components: {
                navigation: SkillList,
              },
            },

            {
              name: 'SkillView',
              path: ':id/view',
              components: {
                navigation: SkillList,
                detail: EntityPageSkillComponent,
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
