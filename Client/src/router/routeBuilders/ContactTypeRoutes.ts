import { RouteConfig }                          from 'vue-router';
import ContactTypeList                          from '@/componentsBusinessGui/contactType/list/ContactTypeList';
import EntityPageContactTypeComponent           from '@/componentsBusinessGui/contactType/detail/detailPage/EntityPageContactTypeComponent';
import MasterDetailPage                         from '@/componentsCommonGui/masterDetail/MasterDetailPage.vue';

export default class ContactTypeRoutes {

    public static register(): RouteConfig {

        const route: RouteConfig = {
          path: '/contactType',

          component: MasterDetailPage,
          children: [
            {
              name: 'contactType',
              path: '',
              components: {
                navigation: ContactTypeList,
              },
            },
            {
              name: 'ContactTypeView',
              path: ':id/view',
              components: {
                navigation: ContactTypeList,
                detail: EntityPageContactTypeComponent,
              },
              props: {
                navigation: true,
                detail: true,
              },
            },
            {
              name: 'ContactTypeNew',
              path: 'new',
              components: {
                navigation: ContactTypeList,
                detail: EntityPageContactTypeComponent,
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
