import { RouteConfig }                          from 'vue-router';
import EntityPageSecurityGroupComponent         from '@/componentsBusinessGui/security/groups/detail/detailPage/EntityPageSecurityGroupComponent';
import MasterDetailPage                         from '@/componentsCommonGui/masterDetail/MasterDetailPage.vue';
import SecurityGroupList                        from '@/componentsBusinessGui/security/groups/list/SecurityGroupList';

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
                detail: EntityPageSecurityGroupComponent,
              },
              props: {
                navigation: true,
                detail: true,
              },
            },
            {
              name: 'SecurityGroupView',
              path: 'new',
              components: {
                navigation: SecurityGroupList,
                detail: EntityPageSecurityGroupComponent,
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
