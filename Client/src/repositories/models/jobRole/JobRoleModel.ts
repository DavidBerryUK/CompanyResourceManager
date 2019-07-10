import { IApiModel }                            from "../interfaces/IApiModel";

export default class JobRoleModel implements IApiModel{

    public jobRoleId : string
    public name : string        
    public isActive : boolean

    constructor() {
        this.jobRoleId = "00000000-0000-0000-0000-000000000000";
        this.name = ""        
        this.isActive = false
    }

    get entityName() : string {
        return "JobRole";
    }
    get entityKey() : string {
        return `${this.jobRoleId}`;
    }
    get entityValue() : string {
        return `${this.name}`;
    }
}