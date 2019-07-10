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

    private originalJson: string = "";

    // properties that are set after class has been instantiated or
    // when an evaluation is requested
    //
    hasObjectChanged: boolean = false;
    isObjectSameAsOriginal: boolean = false;

    //
    // set the original value 
    //
    constructor(object: any) {
        this.reset(object);
    }

    reset(object: any) {
        this.originalJson = this.objectToJson(object);
        this.hasObjectChanged = false;
        this.isObjectSameAsOriginal = true;
    }

    //
    // compare new version of object with original, the method
    // also returns true if the object has changed
    //
    evaluateHasObjectChanged(object: any): boolean {
        var newJson = this.objectToJson(object);
        this.isObjectSameAsOriginal = (newJson == this.originalJson);
        this.hasObjectChanged = !this.isObjectSameAsOriginal;
        return this.hasObjectChanged;
    }

    private objectToJson(object: any): string {
        return JSON.stringify(object).replace(/"/g, '');
    }
}