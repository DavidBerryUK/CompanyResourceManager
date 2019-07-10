import NavigationBase                           from "./NavigationBase";
import Vue                                      from "vue";

export default class NavigationAssetType extends NavigationBase {

    static gotoViewPage(instance: Vue, assetTypeId: string) {
        this.navigateTo(instance, "AssetTypeView", `${assetTypeId}`);
    }

    static gotoEditPage(instance: Vue, assetTypeId: string) {
        this.navigateTo(instance, "AssetTypeEdit", `${assetTypeId}`);
    }

    static gotoNewPage(instance: Vue) {
        this.navigateTo(instance, "AssetTypeEdit", "new");
    }
}