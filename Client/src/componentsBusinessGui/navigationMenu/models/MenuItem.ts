/**
 *
 *
 * @export
 * @class MenuItem
 */
export default class MenuItem {

    public title: string;
    public icon: string;
    public route: string;
    public subMenus: Array<MenuItem>;

    public active: boolean = false;

    constructor(title: string, route: string, icon: string) {
        this.title = title;
        this.route = route;
        this.icon = icon;
        this.subMenus = new Array<MenuItem>();
    }

    public get isMenuContainer(): boolean {
        return this.subMenus.length > 0;
    }

    public get isMenuItem(): boolean {
        return this.subMenus.length === 0;
    }
}
