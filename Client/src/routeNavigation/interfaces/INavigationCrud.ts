import Vue                                      from 'vue';

export interface INavigationCrud {
    gotoViewPage(instance: Vue, entityId: string): void;
    gotoNewPage(instance: Vue): void;
}
