export interface IComponentMetaData {

    componentName: string;
    componentDescription: string;

}

export default class ComponentMetaDataInterfaceGuards {

    public static doesSupportIComponentMetaData(classInstance: any): classInstance is IComponentMetaData {
        let doesUseInterface = classInstance.componentName !== undefined;
        return doesUseInterface;
    }
}
