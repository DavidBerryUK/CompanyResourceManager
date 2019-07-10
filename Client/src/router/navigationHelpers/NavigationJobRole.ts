import NavigationBase                           from "./NavigationBase";
import Vue                                      from "vue";

export default class NavigationJobRole extends NavigationBase {

    static gotoViewPage(instance: Vue, jobRoleId: string) {
        this.navigateTo(instance, "JobRoleView", `${jobRoleId}`);
    }

    static gotoEditPage(instance: Vue, jobRoleId: string) {
        this.navigateTo(instance, "JobRoleEdit", `${jobRoleId}`);
    }

    static gotoNewPage(instance: Vue) {
        this.navigateTo(instance, "JobRoleEdit", "new");
    }
}