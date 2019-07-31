import EntityPagePersonComponent                from '@/componentsEntityPages/entityPagePerson/EntityPagePersonComponent';
import { RouteConfig }                          from 'vue-router';
import MasterDetailPage                         from '@/componentsCommonGui/masterDetail/MasterDetailPage.vue';
import PersonEdit                               from '@/componentsBusinessGui/person/edit/PersonEdit.vue';
import PersonList                               from '@/componentsBusinessGui/person/list/PersonList.vue';
import PersonView                               from '@/componentsBusinessGui/person/view/PersonView.vue';

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
                detail: EntityPagePersonComponent, // PersonView,
              },
              props: {
                navigation: true,
                detail: true,
              },
            },

            {
              name: 'PersonEdit',
              path: ':id/edit',
              components: {
                navigation: PersonList,
                detail: PersonEdit,
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
