import NavigationBase                           from "./NavigationBase";
import Vue                                      from "vue";

export default class NavigationPerson extends NavigationBase {

    static gotoViewPage(instance: Vue, personId: string) {
        this.navigateTo(instance, "PersonView", personId);
    }

    static gotoEditPage(instance: Vue, personId: string) {
        this.navigateTo(instance, "PersonEdit", personId);
    }

    static gotoNewPage(instance: Vue) {
        this.navigateTo(instance, "PersonEdit", "new");
    }
}