import { RouteConfig }                          from 'vue-router';
import JobRoleEdit                              from '@/componentsBusinessGui/jobRole/edit/JobRoleEdit.vue';
import JobRoleList                              from '@/componentsBusinessGui/jobRole/list/JobRoleList.vue';
import JobRoleView                              from '@/componentsBusinessGui/jobRole/view/JobRoleView.vue';
import MasterDetailPage                         from '@/componentsCommonGui/masterDetail/MasterDetailPage.vue';

export default class JobRoleRoutes {

    public static register(): RouteConfig {

        var route: RouteConfig = {
          path: "/jobrole",
    
          component: MasterDetailPage,
          children: [
            {
              name: "jobrole",
              path: "",
              components: {
                navigation: JobRoleList
              }
            },
    
            {
              name: "JobRoleView",
              path: ":id/view",
              components: {
                navigation: JobRoleList,
                detail: JobRoleView
              },
              props: {
                navigation: true,
                detail: true
              }
            },
    
            {
              name: "JobRoleEdit",
              path: ":id/edit",
              components: {
                navigation: JobRoleList,
                detail: JobRoleEdit
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