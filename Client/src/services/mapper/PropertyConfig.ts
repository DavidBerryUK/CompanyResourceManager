import { IApiModel }                  from '@/repositories/models/interfaces/IApiModel';
import { IModelFactory }              from '../../repositories/modelFactories/interfaces/IModelFactory';

export default class PropertyConfig {
    public propertyName: string;
    public modelFactory: IModelFactory<IApiModel>;

    constructor(
        propertyName: string,
        modelFactory: IModelFactory<IApiModel>) {
        this.propertyName = propertyName;
        this.modelFactory = modelFactory;
    }
}
