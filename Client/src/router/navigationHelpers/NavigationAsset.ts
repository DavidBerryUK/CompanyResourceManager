import NavigationBase                           from "./NavigationBase";
import Vue                                      from "vue";

export default class NavigationAsset extends NavigationBase {

    static gotoViewPage(instance: Vue, assetId: string) {
        this.navigateTo(instance, "AssetView", `${assetId}`);
    }

    static gotoEditPage(instance: Vue, assetId: string) {
        this.navigateTo(instance, "AssetEdit", `${assetId}`);
    }

    static gotoNewPage(instance: Vue) {
        this.navigateTo(instance, "AssetEdit", "new");
    }
}