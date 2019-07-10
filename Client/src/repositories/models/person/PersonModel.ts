import { IApiModel }                            from "../interfaces/IApiModel";

export default class PersonModel implements IApiModel{
    
    public personId : string 
    public forename : string    
    public surname : string    
    public email : string    
    public jobRoleId: string
    public isActive : boolean

    constructor() {
        this.personId = "00000000-0000-0000-0000-000000000000";
        this.jobRoleId = "00000000-0000-0000-0000-000000000000";
        this.forename = "";
        this.surname = "";
        this.email = "";
        this.isActive = false;
    }

    get entityName() : string {
        return "Person";
    }
    get entityKey() : string {
        return this.personId;
    }
    get entityValue() : string {
        return `${this.forename} ${this.surname}`;
    }
}