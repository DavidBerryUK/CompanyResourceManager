import AboutRoutes                            from './routeBuilders/AboutRoutes';
import AssetRoutes                            from './routeBuilders/AssetRoutes';
import AssetTypeRoutes                        from './routeBuilders/AssetTypeRoutes';
import HomeRoutes                             from './routeBuilders/HomeRoutes';
import JobRoleRoutes                          from './routeBuilders/JobRoleRoutes';
import PeopleRoutes                           from './routeBuilders/PeopleRoutes';
import Router                                 from 'vue-router';
import Vue                                    from 'vue';
import VueRouter                              from 'vue-router';

Vue.use(VueRouter);

export default class ApplicationRouter extends Router {

  constructor() {
    super({
      routes: [
        AboutRoutes.register(),
        AssetRoutes.register(),
        AssetTypeRoutes.register(),        
        HomeRoutes.register(),
        JobRoleRoutes.register(),
        PeopleRoutes.register()
      ],
    });
  }
}
