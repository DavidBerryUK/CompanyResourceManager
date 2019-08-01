import { INavigationCrud }                      from './interfaces/INavigationCrud';
import NavigationBaseCrud                       from './base/NavigationBaseCrud';

export default class NavigationCrudSkill extends NavigationBaseCrud implements INavigationCrud {

    constructor() {
        super('SkillView', 'SkillNew');
    }
}
