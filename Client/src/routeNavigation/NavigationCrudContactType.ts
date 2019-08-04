import { INavigationCrud }                      from './interfaces/INavigationCrud';
import NavigationBaseCrud                       from './base/NavigationBaseCrud';

export default class NavigationCrudContactType extends NavigationBaseCrud implements INavigationCrud {

    constructor() {
        super('ContactTypeView', 'ContactTypeNew');
    }
}
