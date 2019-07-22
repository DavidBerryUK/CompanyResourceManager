import { INavigationCrud }                      from './interfaces/INavigationCrud';
import NavigationBaseCrud                       from './base/NavigationBaseCrud';

export default class NavigationCrudAssetType extends NavigationBaseCrud implements INavigationCrud  {

    constructor() {
        super('AssetTypeView', 'AssetTypeEdit', 'AssetTypeEdit');
    }
}
