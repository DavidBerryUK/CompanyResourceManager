//
// model  used in UI to bind to a list of switches, check boxes, radio boxes etc
//
export default class {
    id : string;
    name: string;
    selected: boolean;

    constructor(id : string, name : string, selected : boolean)
    {
        this.id = id;
        this.name = name;
        this.selected = selected;
        
    }

    toggle() {
        this.selected = ! this.selected;
    }
}