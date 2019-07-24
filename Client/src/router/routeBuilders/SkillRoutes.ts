import { RouteConfig }                          from 'vue-router';
import MasterDetailPage                         from '@/componentsCommonGui/masterDetail/MasterDetailPage.vue';
import SkillEdit                                from '@/componentsBusinessGui/skill/edit/SkillEdit';
import SkillList                                from '@/componentsBusinessGui/skill/list/SkillList';
import SkillView                                from '@/componentsBusinessGui/skill/view/SkillView';

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
                detail: SkillView,
              },
              props: {
                navigation: true,
                detail: true,
              },
            },

            {
              name: 'SkillEdit',
              path: ':id/edit',
              components: {
                navigation: SkillList,
                detail: SkillEdit,
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
