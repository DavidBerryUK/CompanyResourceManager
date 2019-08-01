import { INavigationCrud }                      from './interfaces/INavigationCrud';
import NavigationBaseCrud                       from './base/NavigationBaseCrud';

export default class NavigationCrudPerson extends NavigationBaseCrud implements INavigationCrud  {

    constructor() {
        super('PersonView', 'PersonNew');
    }
}
