import { EnumModalWidth }                       from "../constants/StandardDialogWidth";
import { MaterialDesignColor }                  from "../../../services/colors/materialDesign/constants/MaterialDesignColors";

export enum EnumModalIcon {
    Information = 1,
    Question = 2,
    Warning = 3,
    Error = 4
}

export enum EnumModalButton {
    Ok = 1,
    YesNo = 2,
    OkCancel = 3,
}

export default class CommonAppDialogOptions {

    themeColor: string = MaterialDesignColor.teal;
    icon: EnumModalIcon = EnumModalIcon.Information;
    button: EnumModalButton = EnumModalButton.Ok;
    dialogWidth: EnumModalWidth = EnumModalWidth.Default;
    title: string = "";
    message: string = "";

    constructor() {

    }
}