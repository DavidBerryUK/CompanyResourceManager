export enum enumEditState {
    ok,
    changed,
    invalid,
    saving,
    savedOk,
    saveFailed,
}

export default class InteractiveEditState {

    public state: enumEditState = enumEditState.ok;

    public get description(): string {

        switch (this.state) {

            case enumEditState.ok:
                return 'ok';

            case enumEditState.changed:
                return 'changed';

            case enumEditState.invalid:
                return 'invalid';

            case enumEditState.saving:
                return 'saving';

            case enumEditState.savedOk:
                return 'saved';

            case enumEditState.saveFailed:
                return 'failed to save';

        }
    }
}
