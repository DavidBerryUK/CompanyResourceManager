import { INavigationCrud }                      from './interfaces/INavigationCrud';
import NavigationBaseCrud                       from './base/NavigationBaseCrud';

export default class NavigationCrudTeam extends NavigationBaseCrud implements INavigationCrud {

    constructor() {
        super('TeamView', 'TeamEdit', 'TeamEdit');
    }
}
