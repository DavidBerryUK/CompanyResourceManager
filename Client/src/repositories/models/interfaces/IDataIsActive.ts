export interface IDataIsActive {

    isActive: boolean;
}

export default class IsActiveDataInterfaceGuards {

    public static doesSupportIDataIsActive(classInstance: any): classInstance is IDataIsActive {

        if ( (classInstance as IDataIsActive).isActive === undefined ) {
            return false;
        }
        return true;
    }
}
