import { RouteConfig }                          from 'vue-router';
import AssetTypeEdit                            from '@/componentsBusinessGui/assetType/edit/AssetTypeEdit.vue';
import AssetTypeList                            from '@/componentsBusinessGui/assetType/list/AssetTypeList.vue';
import AssetTypeView                            from '@/componentsBusinessGui/assetType/view/AssetTypeView.vue';
import MasterDetailPage                         from '@/componentsCommonGui/masterDetail/MasterDetailPage.vue';

export default class AssetTypeRoutes {

    public static register(): RouteConfig {

        var route: RouteConfig = {
          path: "/assettype",
    
          component: MasterDetailPage,
          children: [
            {
              name: "AssetType",
              path: "",
              components: {
                navigation: AssetTypeList
              }
            },
    
            {
              name: "AssetTypeView",
              path: ":id/view",
              components: {
                navigation: AssetTypeList,
                detail: AssetTypeView
              },
              props: {
                navigation: true,
                detail: true
              }
            },
    
            {
              name: "AssetTypeEdit",
              path: ":id/edit",
              components: {
                navigation: AssetTypeList,
                detail: AssetTypeEdit
              },
              props: {
                navigation: true,
                detail: true
              }
            }
          ]
        };
    
        return route;
      }
}