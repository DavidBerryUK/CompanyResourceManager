import { RouteConfig }                          from 'vue-router';
import AssetList                                from '@/componentsBusinessGui/asset/list/AssetList.vue';
import EntityPageAssetComponent                 from '@/componentsBusinessGui/asset/detail/detailPage/EntityPageAssetComponent';
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
                detail: EntityPageAssetComponent,
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
