import { INavigationCrud }                      from './../interfaces/INavigationCrud';
import NavigationBase                           from "./NavigationBase";
import Vue                                      from "vue";

export default class NavigationBaseCrud extends NavigationBase implements INavigationCrud {

    
    private viewRouteName : string;
    private editRouteName : string;        
    private newRouteName : string;

    constructor(viewRouteName : string, editRouteName : string, newRouteName : string, )
    {
        super();        
        this.viewRouteName = viewRouteName;
        this.editRouteName = editRouteName;
        this.newRouteName = newRouteName;
    }
    
    gotoViewPage(instance: Vue, entitytId: string) {
        this.navigateTo(instance, this.viewRouteName, `${entitytId}`);
    }

    gotoEditPage(instance: Vue, entitytId: string) {
        this.navigateTo(instance, this.editRouteName, `${entitytId}`);
    }

    gotoNewPage(instance: Vue) {
        this.navigateTo(instance, this.newRouteName, "new");
    }

}