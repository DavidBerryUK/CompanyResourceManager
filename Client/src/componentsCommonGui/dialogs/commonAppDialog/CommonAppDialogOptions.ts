import { EnumModalWidth }                       from '../constants/StandardDialogWidth';
import { MaterialDesignColor }                  from '../../../services/colors/materialDesign/constants/MaterialDesignColors';

export enum EnumModalIcon {
    Information = 1,
    Question = 2,
    Warning = 3,
    Error = 4,
}

export enum EnumModalButton {
    Ok = 1,
    YesNo = 2,
    OkCancel = 3,
}

export default class CommonAppDialogOptions {

    public themeColor: string = MaterialDesignColor.teal;
    public icon: EnumModalIcon = EnumModalIcon.Information;
    public button: EnumModalButton = EnumModalButton.Ok;
    public dialogWidth: EnumModalWidth = EnumModalWidth.Default;
    public title: string = '';
    public message: string = '';

    constructor() {

    }
}
