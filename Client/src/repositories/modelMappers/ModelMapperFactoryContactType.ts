import { IModelGenericMapper }                  from './interfaces/IModelGenericMapper';
import ContactTypeExtendedModel                 from '../models/contactType/ContactTypeExtendedModel';
import ContactTypeSummaryModel                  from '../models/contactType/ContactTypeSummaryModel';
import ModelFactoryContactTypeExtended          from '@/repositories/modelFactories/ModelFactoryContactTypeExtended';
import ModelFactoryContactTypeSummary           from '../modelFactories/ModelFactoryContactTypeSummary';
import ModelGenericMapper                       from './generic/ModelGenericMapper';


export default class ModelMapperFactoryContactType {

    public static createSummaryMapper(): IModelGenericMapper<ContactTypeSummaryModel> {
        return new ModelGenericMapper<ContactTypeSummaryModel> (
            new ModelFactoryContactTypeSummary());
    }

    public static createExtendedMapper(): IModelGenericMapper<ContactTypeExtendedModel> {
        return new ModelGenericMapper<ContactTypeExtendedModel> (
            new ModelFactoryContactTypeExtended());
    }
}
