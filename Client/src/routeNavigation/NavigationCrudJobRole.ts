import { INavigationCrud }                      from './interfaces/INavigationCrud';
import NavigationBaseCrud                       from './base/NavigationBaseCrud';

export default class NavigationCrudJobRole extends NavigationBaseCrud implements INavigationCrud  {

    constructor() {
        super("JobRoleView","JobRoleEdit","JobRoleEdit")
    }

}