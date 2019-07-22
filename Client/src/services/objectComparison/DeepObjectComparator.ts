//
// this is used to determine if a object has been changed
// from its original state.
//
// this is used in the application to determine if a user
// has performed any updates on an edit screen
//
// this is not meant to be a high performance routine
//
export default class DeepObjectComparator {

    // properties that are set after class has been instantiated or
    // when an evaluation is requested
    //
    public hasObjectChanged: boolean = false;
    public isObjectSameAsOriginal: boolean = false;

    private originalJson: string = '';

    //
    // set the original value
    //
    constructor(object: any) {
        this.reset(object);
    }

    public reset(object: any) {
        this.originalJson = this.objectToJson(object);
        this.hasObjectChanged = false;
        this.isObjectSameAsOriginal = true;
    }

    //
    // compare new version of object with original, the method
    // also returns true if the object has changed
    //
    public evaluateHasObjectChanged(object: any): boolean {
        const newJson = this.objectToJson(object);
        this.isObjectSameAsOriginal = (newJson === this.originalJson);
        this.hasObjectChanged = !this.isObjectSameAsOriginal;
        return this.hasObjectChanged;
    }

    private objectToJson(object: any): string {
        return JSON.stringify(object).replace(/"/g, '');
    }
}
