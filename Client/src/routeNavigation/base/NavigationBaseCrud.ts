import { INavigationCrud }                      from './../interfaces/INavigationCrud';
import NavigationBase                           from './NavigationBase';
import Vue                                      from 'vue';

export default class NavigationBaseCrud extends NavigationBase implements INavigationCrud {

    private viewRouteName: string;
    private newRouteName: string;

    constructor(viewRouteName: string, newRouteName: string ) {
        super();
        this.viewRouteName = viewRouteName;
        this.newRouteName = newRouteName;
    }

    public gotoViewPage(instance: Vue, entitytId: string) {
        this.navigateTo(instance, this.viewRouteName, `${entitytId}`);
    }

    public gotoNewPage(instance: Vue) {
        this.navigateTo(instance, this.newRouteName, 'new');
    }
}
