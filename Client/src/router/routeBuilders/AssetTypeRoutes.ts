import { RouteConfig }                          from 'vue-router';
import AssetTypeList                            from '@/componentsBusinessGui/assetType/list/AssetTypeList.vue';
import MasterDetailPage                         from '@/componentsCommonGui/masterDetail/MasterDetailPage.vue';
import EntityPageAssetTypeComponent from '@/componentsBusinessGui/assetType/detail/detailPage/EntityPageAssetTypeComponent';

export default class AssetTypeRoutes {

    public static register(): RouteConfig {

        const route: RouteConfig = {
          path: '/assettype',

          component: MasterDetailPage,
          children: [
            {
              name: 'AssetType',
              path: '',
              components: {
                navigation: AssetTypeList,
              },
            },
            {
              name: 'AssetTypeView',
              path: ':id/view',
              components: {
                navigation: AssetTypeList,
                detail: EntityPageAssetTypeComponent,
              },
              props: {
                navigation: true,
                detail: true,
              },
            },
            {
              name: 'AssetTypeNew',
              path: 'new',
              components: {
                navigation: AssetTypeList,
                detail: EntityPageAssetTypeComponent,
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
