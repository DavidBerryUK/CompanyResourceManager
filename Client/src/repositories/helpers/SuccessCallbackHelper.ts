//
// used to report back the success of an api execution
//
export enum EnumSuccessType {
  CreatedOk = 1,
  UpdatedOk = 2,
  DeletedOk = 3,
  DeActivatedOk = 4,
  ActivatedOk = 5,
}

//
// used to report back the success of an api execution
//
export type ISuccessCallback<T> = (data: T, successType: EnumSuccessType) => void;

export default class SuccessCallbackHelper {
  public static enumSuccessTypeToString(value: EnumSuccessType): string {
    switch (value) {
      case EnumSuccessType.CreatedOk:
        return 'Created Ok';

      case EnumSuccessType.UpdatedOk:
        return 'Updated Ok';

      case EnumSuccessType.DeletedOk:
        return 'Deleted Ok';

      case EnumSuccessType.DeActivatedOk:
        return 'DeActivated Ok';

      case EnumSuccessType.ActivatedOk:
        return 'Activated Ok';

      default:
        return `Unknown success state ${value}`;
    }
  }
}
