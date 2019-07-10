//
// Create a list of standard widths for use with dialog boxes, this will help
// ensuring the application has a standard list of sizes helping the
// appearance of consistency though the application.
//
//

//
// Enums for standard sizes, this is how the rest of the application
// will view the sizes
//
export enum EnumModalWidth {
  Default = 0,
  DynamicQuarterWidth = 1,
  DynamicHalfWidth = 2,
  DynamicFullWidth = 3,
  FixedExtraNarrow = 4,
  FixedNarrow = 5,
  FixedMedium = 6,
  FixedLarge = 7,
  FixedExtraLarge = 8
}

//
// helper class, allow lists to be generated for user selection, keep
// information together, managed and organised
//
export class WidthInfo {
  id: EnumModalWidth;
  css: string;
  name: string;

  constructor(id: EnumModalWidth, css: string, name: string) {
    this.id = id;
    this.css = css;
    this.name = name;
  }
}

// Management of dialog widths
//
export default class StandardDialogWidth {
  private static widthInfoList: Array<WidthInfo> | null = null;

  //
  // create a standard list of enums
  //
  static get widthList(): Array<WidthInfo> {
    //
    // is list isn't already created then initialise it
    //
    if (this.widthInfoList == null) {
      var list = Array<WidthInfo>();

      list.push(new WidthInfo(EnumModalWidth.DynamicQuarterWidth, "dialog-width-quarter-width", "Quarter Width"));
      list.push(new WidthInfo(EnumModalWidth.DynamicHalfWidth, "dialog-width-half-width", "Half Width"));
      list.push(new WidthInfo(EnumModalWidth.DynamicFullWidth, "dialog-width-full-width", "Full Width"));
      list.push(new WidthInfo(EnumModalWidth.FixedExtraNarrow, "dialog-width-extra-narrow", "Extra Narrow"));
      list.push(new WidthInfo(EnumModalWidth.FixedNarrow, "dialog-width-narrow", "Narrow"));
      list.push(new WidthInfo(EnumModalWidth.FixedMedium, "dialog-width-medium", "Medium"));
      list.push(new WidthInfo(EnumModalWidth.FixedLarge, "dialog-width-large", "Large"));
      list.push(new WidthInfo(EnumModalWidth.FixedExtraLarge, "dialog-width-extra-large", "Extra Large"));
      list.push(new WidthInfo(EnumModalWidth.Default, "dialog-width-default", "Default"));

      this.widthInfoList = list;
    }

    return this.widthInfoList;
  }

  //
  // get info for a given width enum
  //
  static getWidthInfo(width: EnumModalWidth) {
    var info = this.widthList.filter((info: WidthInfo) => {
      return info.id == width;
    });

    return info[0];
  }
}
