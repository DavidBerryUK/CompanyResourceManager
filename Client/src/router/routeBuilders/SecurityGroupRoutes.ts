import { RouteConfig }                          from 'vue-router';
import MasterDetailPage                         from '@/componentsCommonGui/masterDetail/MasterDetailPage.vue';
import SecurityGroupEdit                        from '@/componentsBusinessGui/security/groups/edit/SecurityGroupEdit';
import SecurityGroupList                        from '@/componentsBusinessGui/security/groups/list/SecurityGroupList';
import SecurityGroupView                        from '@/componentsBusinessGui/security/groups/view/SecurityGroupView';

export default class SecurityGroupRoutes {

    public static register(): RouteConfig {

        const route: RouteConfig = {
          path: '/security/group',

          component: MasterDetailPage,
          children: [
            {
              name: 'securitygroup',
              path: '',
              components: {
                navigation: SecurityGroupList,
              },
            },

            {
              name: 'SecurityGroupView',
              path: ':id/view',
              components: {
                navigation: SecurityGroupList,
                detail: SecurityGroupView,
              },
              props: {
                navigation: true,
                detail: true,
              },
            },

            {
              name: 'SecurityGroupEdit',
              path: ':id/edit',
              components: {
                navigation: SecurityGroupList,
                detail: SecurityGroupEdit,
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
