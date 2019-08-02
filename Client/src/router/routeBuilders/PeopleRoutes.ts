import { RouteConfig }                          from 'vue-router';
import EntityPagePersonComponent                from '@/componentsBusinessGui/person/detail/detailPage/EntityPagePersonComponent';
import MasterDetailPage                         from '@/componentsCommonGui/masterDetail/MasterDetailPage.vue';
import PersonList                               from '@/componentsBusinessGui/person/list/PersonList.vue';

export default class PeopleRoutes {

    public static register(): RouteConfig {

        const route: RouteConfig = {
          path: '/person',

          component: MasterDetailPage,
          children: [
            {
              name: 'person',
              path: '',
              components: {
                navigation: PersonList,
              },
            },
            {
              name: 'PersonView',
              path: ':id/view',
              components: {
                navigation: PersonList,
                detail: EntityPagePersonComponent,
              },
              props: {
                navigation: true,
                detail: true,
              },
            },
            {
              name: 'PersonNew',
              path: 'new',
              components: {
                navigation: PersonList,
                detail: EntityPagePersonComponent,
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
