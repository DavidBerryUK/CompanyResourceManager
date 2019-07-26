import { IModelGenericMapper }                  from './interfaces/IModelGenericMapper';
import ModelFactoryPersonExtended               from '../modelFactories/ModelFactoryPersonExtended';
import ModelFactoryPersonSummary                from '../modelFactories/ModelFactoryPersonSummary';
import ModelGenericMapper                       from './generic/ModelGenericMapper';
import PersonExtendedModel                      from '../models/person/PersonExtendedModel';
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';

export default class ModelMapperFactoryPerson {

    public static createSummaryMapper(): IModelGenericMapper<PersonSummaryModel> {
        return new ModelGenericMapper<PersonSummaryModel> (
            new ModelFactoryPersonSummary());
    }

    public static createExtendedMapper(): IModelGenericMapper<PersonExtendedModel> {
        return new ModelGenericMapper<PersonExtendedModel> (
            new ModelFactoryPersonExtended());
    }
}
