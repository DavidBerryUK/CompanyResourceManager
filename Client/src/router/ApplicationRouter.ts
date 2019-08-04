import AboutRoutes                            from './routeBuilders/AboutRoutes';
import AssetRoutes                            from './routeBuilders/AssetRoutes';
import AssetTypeRoutes                        from './routeBuilders/AssetTypeRoutes';
import ContactTypeRoutes                      from './routeBuilders/ContactTypeRoutes';
import DevelopmentRoutes                      from './routeBuilders/DevelopmentRoutes';
import HomeRoutes                             from './routeBuilders/HomeRoutes';
import JobRoleRoutes                          from './routeBuilders/JobRoleRoutes';
import PeopleRoutes                           from './routeBuilders/PeopleRoutes';
import Router                                 from 'vue-router';
import SecurityGroupRoutes                    from './routeBuilders/SecurityGroupRoutes';
import SkillRoutes                            from './routeBuilders/SkillRoutes';
import TeamRoutes                             from './routeBuilders/TeamRoutes';
import Vue                                    from 'vue';


Vue.use(Router);

// route registration is broken down into seperate sub classes
// for maintainability.
//
export default class ApplicationRouter extends Router {

  constructor() {
    super({
      routes: [
        AboutRoutes.register(),
        AssetRoutes.register(),
        AssetTypeRoutes.register(),
        ContactTypeRoutes.register(),
        DevelopmentRoutes.register(),
        HomeRoutes.register(),
        JobRoleRoutes.register(),
        PeopleRoutes.register(),
        SecurityGroupRoutes.register(),
        TeamRoutes.register(),
        SkillRoutes.register(),
      ],
    });
  }
}
