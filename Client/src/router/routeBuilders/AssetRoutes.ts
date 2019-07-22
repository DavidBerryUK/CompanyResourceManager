import { RouteConfig }                          from 'vue-router';
import AssetEdit                                from '@/componentsBusinessGui/asset/edit/AssetEdit.vue';
import AssetList                                from '@/componentsBusinessGui/asset/list/AssetList.vue';
import AssetView                                from '@/componentsBusinessGui/asset/view/AssetView.vue';
import MasterDetailPage                         from '@/componentsCommonGui/masterDetail/MasterDetailPage.vue';

export default class AssetRoutes {

    public static register(): RouteConfig {

        const route: RouteConfig = {
          path: '/asset',

          component: MasterDetailPage,
          children: [
            {
              name: 'Asset',
              path: '',
              components: {
                navigation: AssetList,
              },
            },

            {
              name: 'AssetView',
              path: ':id/view',
              components: {
                navigation: AssetList,
                detail: AssetView,
              },
              props: {
                navigation: true,
                detail: true,
              },
            },

            {
              name: 'AssetEdit',
              path: ':id/edit',
              components: {
                navigation: AssetList,
                detail: AssetEdit,
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
