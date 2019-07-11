import { INavigationCrud }                      from './interfaces/INavigationCrud';
import NavigationBaseCrud                       from './base/NavigationBaseCrud';

export default class NavigationCrudAsset extends NavigationBaseCrud implements INavigationCrud {

    constructor() {
        super("AssetView","AssetEdit","AssetEdit")
    }

}