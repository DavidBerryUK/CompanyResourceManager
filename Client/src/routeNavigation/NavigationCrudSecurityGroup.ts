import { INavigationCrud }                      from './interfaces/INavigationCrud';
import NavigationBaseCrud                       from './base/NavigationBaseCrud';

export default class NavigationCrudSecurityGroup extends NavigationBaseCrud implements INavigationCrud  {

    constructor() {
        super('SecurityGroupView', 'SecurityGroupNew');
    }
}
