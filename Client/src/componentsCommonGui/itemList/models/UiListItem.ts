//
// model  used in UI to bind to a list of switches, check boxes, radio boxes etc
//
export default class {
    public id: string;
    public name: string;
    public selected: boolean;

    constructor(id: string, name: string, selected: boolean) {
        this.id = id;
        this.name = name;
        this.selected = selected;
    }

    public toggle() {
        this.selected = ! this.selected;
    }
}
